const Button1 = ({ handleClick, text }) => {
    return (
      <button
        onClick={handleClick}
        className="relative px-6 py-2 font-semibold text-white rounded-lg 
                   bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 
                   bg-[length:300%_300%] animate-gradientShift 
                   transition-all duration-500 hover:scale-105"
      >
        {text}
      </button>
    );
  };
  
  export default Button1;
  