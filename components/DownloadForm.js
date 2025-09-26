import { useState } from "react";

export default function DownloadForm({
  documentName,
  documentPath,
  documentDescription,
  onSuccess,
  onError,
  className = "",
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/download", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          documentName: documentName,
          documentPath: documentPath,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setIsSubmitted(true);

      // Trigger download
      if (data.downloadUrl) {
        const link = document.createElement("a");
        link.href = data.downloadUrl;
        link.download = documentName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }

      // Call success callback
      if (onSuccess) {
        onSuccess(data);
      }
    } catch (err) {
      const errorMessage = err.message || "Failed to process download request";
      setError(errorMessage);

      if (onError) {
        onError(err);
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div
        className={`bg-green-50 border border-green-200 rounded-xl p-6 text-center ${className}`}
      >
        <div className="text-green-600 text-4xl mb-4">✅</div>
        <h3 className="text-xl font-bold text-green-800 mb-2">
          Download Started!
        </h3>
        <p className="text-green-700 mb-4">
          Thank you, {formData.name}! Your document is downloading now.
        </p>
        <p className="text-sm text-green-600">
          We've added you to our list and will keep you updated on new
          resources.
        </p>
      </div>
    );
  }

  return (
    <div
      className={`bg-white rounded-xl shadow-lg border border-gray-200 p-6 ${className}`}
    >
      <div className="text-center mb-6">
        <div className="text-blue-600 text-4xl mb-4">📄</div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Download {documentName}
        </h3>
        {documentDescription && (
          <p className="text-gray-600 mb-4">{documentDescription}</p>
        )}
        <p className="text-sm text-gray-500">
          Enter your details below to access this resource
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="Enter your email address"
          />
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="flex">
              <div className="text-red-600 text-sm">
                <strong>Error:</strong> {error}
              </div>
            </div>
          </div>
        )}

        <button
          type="submit"
          disabled={isLoading || !formData.name || !formData.email}
          className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-all duration-200 ${
            isLoading || !formData.name || !formData.email
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 hover:shadow-lg transform hover:-translate-y-0.5"
          }`}
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Processing...
            </div>
          ) : (
            "📥 Download Now"
          )}
        </button>

        <p className="text-xs text-gray-500 text-center">
          By downloading, you agree to receive occasional updates about new
          resources and insights.
        </p>
      </form>
    </div>
  );
}
