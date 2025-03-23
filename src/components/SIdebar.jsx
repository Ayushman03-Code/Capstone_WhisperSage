import React from "react";

const Sidebar = ({ isOpen, toggleSidebar, setActiveComponent }) => {
  return (
    <div className={`h-screen fixed top-0 left-0 transition-all duration-300 flex bg-gray-950 bg-opacity-75 text-white ${isOpen ? "w-64" : "w-4"}`}>
      {/* Sidebar Content */}
      <div className={`flex flex-col justify-center items-center transition-all duration-300 ${isOpen ? "w-64" : "w-0 overflow-hidden"}`}>
        <h2 className="text-2xl font-logo font-bold mb-8 mr-6">WhisperSage Tools</h2>
        <ul className="space-y-6 text-lg">
          <li>
            <button
              onClick={() => setActiveComponent("Transcript")}
              className="w-full text-left hover:text-blue-400 transition duration-200"
            >
              WhisperSage Transcript
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveComponent("PDF")}
              className="w-full text-left hover:text-blue-400 transition duration-200"
            >
              WhisperSage PDF
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveComponent("Chatbot")}
              className="w-full text-left hover:text-blue-400 transition duration-200"
            >
              WhisperSage Report
            </button>
          </li>
        </ul>
      </div>

      {/* Toggle Button (Arrow) on the Right Side */}
      <button
        onClick={toggleSidebar}
        className="absolute right-[-12px] top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-75 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg hover:bg-gray-700 transition"
      >
        {isOpen ? "<" : ">"}
      </button>
    </div>
  );
};

export default Sidebar;
