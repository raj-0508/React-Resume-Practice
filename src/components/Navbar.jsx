import { useState } from "react";
import logo from "../assets/logo.svg";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex flex-col md:flex-row md:justify-between md:items-center px-8 gap-2.5 mt-8 relative">
      <div className="flex justify-between items-center w-full md:w-auto">
        <img src={logo} alt="logo" className="w-32 h-auto" />
        <button
          className="md:hidden text-4xl text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          &#8801;
        </button>
      </div>

      <ul
        className={`flex flex-col md:flex-row md:items-center list-none gap-4 md:gap-8 mt-4 md:mt-0 ${
          isMenuOpen ? "block" : "hidden"
        } md:flex`}
      >
        <li className="cursor-pointer font-semibold">HOME</li>
        <li className="cursor-pointer font-semibold">PRODUCT</li>
        <li className="cursor-pointer font-semibold">ABOUT</li>
        <li className="cursor-pointer font-semibold">CONTACT</li>
        <li className="cursor-pointer font-semibold">OTHER PAGE</li>
      </ul>
    </nav>
  );
}

export default Navbar;
