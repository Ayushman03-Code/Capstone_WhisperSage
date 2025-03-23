import { useState } from "react";
import Button1 from "./Button1";

const Transcript = () => {
  const [url, setUrl] = useState("");

  const handleGenerate = () => {
    console.log("Generating transcript for:", url);
  };

  return (
    <div className="bg-darkPurple- p-6 rounded-lg shadow-lg w-full max-w-4xl flex">
      <input
        type="text"
        placeholder="Enter URL..."
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="w-full bg-gray-700 p-3 text-black rounded-l-2xl focus:outline-none"
      />
      <Button1 handleClick={handleGenerate} text="Generate" />
    </div>
  );
};

export default Transcript;
