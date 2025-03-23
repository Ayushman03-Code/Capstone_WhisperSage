import React from "react";

const Button1 = ({ handleClick, text = "Generate" }) => {
  return (
    <button
      onClick={handleClick}
      className="bg-teal-600 hover:bg-blue-600 text-white px-4 py-2 rounded-r-lg font-semibold"
    >
      {text}
    </button>
  );
};

export default Button1;
