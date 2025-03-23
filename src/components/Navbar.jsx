import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import User from "../assets/user2.png";


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
    className={`bg-darkPurple/90 flex items-center justify-between sticky top-0 z-50 rounded-3xl transition-all duration-300 ease-in-out mx-auto px-6
        ${isScrolled ? "w-1/2 py-2 bg-darkPurple/90 border border-white" : "w-full py-6 border-none"}`}
    >

    <div className="text-white text-3xl font-logo">
        WhisperSage
    </div>
      <div className="text-white">
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:underline">Application</Link>
          </li>
          <li>
            <Link to="/documentation" className="hover:underline">Documentation</Link>
          </li>
          <li>
            <Link to="/team" className="hover:underline">Our Team</Link>
          </li>
        </ul>
      </div>

      {!isScrolled && (
        <div className="flex items-center">
          <img 
            src={User} 
            alt="User Profile"
            className="w-10 h-10 rounded-full border-2 border-white"
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
