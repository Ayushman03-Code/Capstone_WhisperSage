import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Transcript from "../components/Transcript";
import Chatbot from "../components/Chatbot";
import PDF from "../components/PDF";

const Application = () => {
  const [activeComponent, setActiveComponent] = useState("Transcript");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-darkPurple text-white flex relative">
      {/* Sidebar */}
      <Sidebar 
        isOpen={isSidebarOpen} 
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} 
        setActiveComponent={setActiveComponent} 
      />

      {/* Main Content (Center dynamically based on sidebar state) */}
      <div
        className={`flex-1 flex justify-center transition-all duration-300 ${
          isSidebarOpen ? "ml-64" : "ml-0"
        }`}
      >
        <div className="w-full max-w-4xl text-center"> {/* Increased max width */}
          <h1 className="text-4xl font-logo mb-6">WhisperSage {activeComponent}</h1>

          {/* Render Component Dynamically */}
          {activeComponent === "Transcript" && <Transcript />}
          {activeComponent === "Chatbot" && <Chatbot />}
          {activeComponent === "PDF" && <PDF />}
        </div>
      </div>
    </div>
  );
};

export default Application;
