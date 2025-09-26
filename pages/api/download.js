import { storeLead, logDownload } from "../../lib/database";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, documentName, documentPath } = req.body;

    // Validate required fields
    if (!name || !email || !documentName || !documentPath) {
      return res.status(400).json({
        error:
          "Missing required fields: name, email, documentName, documentPath",
      });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }

    // Get client IP and user agent
    const ipAddress =
      req.headers["x-forwarded-for"] ||
      req.headers["x-real-ip"] ||
      req.connection.remoteAddress ||
      req.socket.remoteAddress ||
      "unknown";

    const userAgent = req.headers["user-agent"] || "unknown";

    // Store lead in database
    const leadId = await storeLead(
      name.trim(),
      email.trim().toLowerCase(),
      documentName.trim(),
      ipAddress,
      userAgent
    );

    // Log the download
    await logDownload(leadId, documentPath);

    // Return success response with download URL
    return res.status(200).json({
      success: true,
      message: "Lead captured and download initiated",
      leadId: leadId,
      downloadUrl: documentPath,
    });
  } catch (error) {
    console.error("Download API error:", error);

    // Handle specific database errors
    if (error.code === "23505") {
      // Unique constraint violation
      return res.status(409).json({
        error: "Email already registered for this document",
      });
    }

    return res.status(500).json({
      error: "Internal server error",
      message:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Something went wrong",
    });
  }
}
