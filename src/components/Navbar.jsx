import logo from "../assets/logo.svg";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 gap-2.5 mt-8">
        <img src={logo} alt="logo" className="w-32 h-auto" />
        <ul className="flex justify-center items-center list-none gap-8">
          <li className="hidden md:block cursor-pointer font-semibold">HOME</li>
          <li className="hidden md:block cursor-pointer font-semibold">PRODUCT</li>
          <li className="hidden md:block cursor-pointer font-semibold ">ABOUT</li>
          <li className="hidden md:block cursor-pointer font-semibold">CONTACT</li>
          <li className="hidden md:block cursor-pointer font-semibold">OTHER PAGE</li>
        </ul>
        <a className="md:hidden text-white text-5xl cursor-pointer" href="#">
          &#8801;
        </a>
    </nav>
  );
}

export default Navbar;
