import React from "react";

const Documentation = () => {
  return (
    <div className="min-h-screen bg-darkPurple text-white p-8">
      <h1 className="text-4xl font-logo mb-6 text-center">WhisperSage Documentation</h1>

        <div className="border border-white p-6 rounded-lg shadow-lg mb-12">
        <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">User Manual</h2>
            <p className="mb-4">
            WhisperSage is an advanced AI-powered application that utilizes Retrieval-Augmented Generation (RAG) to process and analyze various types of data. Users can interact with the system through different modules tailored to their specific needs.
            </p>
            <ul className="list-disc pl-6 space-y-2">
            <li>
                WhisperSage Transcript - Enter a YouTube URL to generate an accurate transcript of the video. The system supports multilingual transcription and translation, allowing conversion from any language to another.
            </li>
            <li>
                WhisperSage PDF RAG - Upload a PDF document and ask questions about its content. The system retrieves relevant information from the file and provides concise, AI-generated responses.
            </li>
            <li>
                Report Generation Bot - Provide data and statistics, and the bot will generate an insightful, well-structured report in `.docx` format.
            </li>
            </ul>
        </section>

        <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
            <p className="mb-4">
            WhisperSage is built using cutting-edge technologies to ensure efficiency, accuracy, and seamless performance. The core technologies include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
            <li>Frontend - React.js with TailwindCSS for a responsive UI.</li>
            <li>Backend - Node.js and FastAPI for handling API requests.</li>
            <li>Database - VectorDB (Chrome/FAISS) for vector embedding and search & retrival of Data</li>
            <li>LLMs - Supports **Ollama** and **OpenAI GPT-4o** for natural language processing.</li>
            <li>Retrieval-Augmented Generation (RAG) - Used to enhance responses by fetching relevant information from the provided sources.</li>
            <li>Whisper API - For high-accuracy multilingual transcription.</li>
            <li>Docx.js - For generating professional-grade reports in `.docx` format.</li>
            </ul>
        </section>
      </div>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Project Repository & Documentation</h2>
        <p className="mb-4">
          Explore the detailed documentation and access the project's repository for further insights.
        </p>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Repository Structure</h3>
          <pre className="bg-gray-900 p-4 rounded-lg text-sm overflow-auto">
            {`
/whisperSage
│── frontend/           # React.js application
│── backend/            # Node.js & Express.js server
│── models/             # Database models
│── utils/              # Utility functions
│── docs/               # Detailed documentation
│── README.md           # Project overview
│── routes/             # API endpoints
            `}
          </pre>
          <p className="mt-4">
            Visit the official GitHub repository:  
            <a
              href="https://github.com/your-repo-link"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              GitHub - WhisperSage
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Documentation;
