import { useState, useEffect } from "react";
import Head from "next/head";
import DownloadForm from "../components/DownloadForm";
import ContainerBlock from "../components/ContainerBlock";
import userData from "../constants/data";

export default function Download() {
  const [documentInfo, setDocumentInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get document info from URL parameters or set default
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const docName =
        urlParams.get("doc") || "Commit Your Code 2025 Presentation";
      const docPath =
        urlParams.get("path") ||
        "/documents/NaveenChatlapalli-CommitYourCode2025.pdf";
      const docDesc =
        urlParams.get("desc") ||
        "My presentation from Commit Your Code 2025 - insights on AI innovation and implementation strategies.";

      setDocumentInfo({
        name: docName,
        path: docPath,
        description: docDesc,
      });
      setLoading(false);
    }
  }, []);

  const handleDownloadSuccess = (data) => {
    console.log("Download successful:", data);
    // You can add analytics tracking here
    if (typeof gtag !== "undefined") {
      gtag("event", "download", {
        event_category: "document",
        event_label: documentInfo.name,
        value: 1,
      });
    }
  };

  const handleDownloadError = (error) => {
    console.error("Download error:", error);
    // You can add error tracking here
  };

  if (loading) {
    return (
      <ContainerBlock>
        <div className="flex justify-center items-center min-h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </ContainerBlock>
    );
  }

  return (
    <>
      <Head>
        <title>{`Download ${documentInfo.name} | ${userData.name}`}</title>
        <meta
          name="description"
          content={`Download ${documentInfo.name} - ${documentInfo.description}`}
        />
        <meta
          property="og:title"
          content={`Download ${documentInfo.name} | ${userData.name}`}
        />
        <meta property="og:description" content={documentInfo.description} />
      </Head>

      <ContainerBlock>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12">
          <div className="max-w-2xl mx-auto px-4">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Download Presentation
              </h1>
              <p className="text-lg text-gray-600">
                Get my Commit Your Code 2025 presentation and join our community
              </p>
            </div>

            <DownloadForm
              documentName={documentInfo.name}
              documentPath={documentInfo.path}
              documentDescription={documentInfo.description}
              onSuccess={handleDownloadSuccess}
              onError={handleDownloadError}
              className="mb-8"
            />

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                What happens next?
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3">✓</span>
                  <span>Your document will start downloading immediately</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3">✓</span>
                  <span>
                    We'll add you to our exclusive newsletter for tech insights
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3">✓</span>
                  <span>
                    You'll get early access to new resources and tools
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3">✓</span>
                  <span>
                    No spam - only valuable content delivered to your inbox
                  </span>
                </li>
              </ul>
            </div>

            <div className="text-center mt-8">
              <p className="text-sm text-gray-500">
                Questions? Contact us at{" "}
                <a
                  href={`mailto:${userData.email}`}
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  {userData.email}
                </a>
              </p>
            </div>
          </div>
        </div>
      </ContainerBlock>
    </>
  );
}
