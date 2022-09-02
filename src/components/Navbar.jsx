import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import icon from "../assets/icon.png";

const Navbar = () => {
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-white">
      <div>
        <img src={icon} alt="Logo" style={{ width: "50px" }} />
      </div>

      {/* Menu */}
      <div>
        <ul className="hidden md:flex">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Experience</li>
          <li>Contact</li>
        </ul>
      </div>
      {/* Hamburger */}

      <div className="hidden">
        <FaBars />
      </div>

      {/* Mobile menu */}

      <div className="hidden">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Experience</li>
        <li>Contact</li>
      </div>

      {/*Social icons */}

      <div className="hidden"></div>
    </div>
  );
};

export default Navbar;
