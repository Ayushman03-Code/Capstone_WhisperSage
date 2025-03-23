import { useState } from "react";
import Button1 from "./Button1"; // Import Button1 component

const Chatbot = () => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerateReport = async () => {
    if (!data.trim()) {
      alert("Please enter data/statistics before generating the report.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/generate-report/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ topic: data }), // Send JSON payload
      });

      if (!response.ok) {
        throw new Error("Failed to generate report.");
      }

      // Create a downloadable file
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "generated_report.docx";
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while generating the report.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <textarea
        className="w-4/5 p-2 border bg-gray-800 rounded-lg"
        rows="16"
        placeholder="Enter data, statistics, views, and other insights here..."
        value={data}
        onChange={(e) => setData(e.target.value)}
      />

      {/* Show spinner while loading */}
      {loading ? (
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
          <span className="text-white">Generating Report...</span>
        </div>
      ) : (
        <Button1 handleClick={handleGenerateReport} text="Generate Report" />
      )}
    </div>
  );
};

export default Chatbot;
