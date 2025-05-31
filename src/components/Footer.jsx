import logo from "../assets/logo.svg";
import fb from "../assets/fb.svg";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";

function Footer() {
  return (
    <footer className="mt-14 flex items-center justify-center flex-col">
      <div className="flex flex-col gap-5">
        <ul className="flex flex-col sm:flex-row gap-8 md:gap-28 justify-center items-center   list-style-none ">
          <li className="cursor-pointer">HOME</li>
          <li className="cursor-pointer">PRODUCT</li>
          <li className="cursor-pointer">ABOUT</li>
          <li className="cursor-pointer">CONTACT</li>
        </ul>
      </div>
      <div className="flex  gap-8 justify-center items-center bg-[#181818] w-full mt-12 px-12 py-6 ">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="flex gap-5 justify-center items-center">
          <img src={fb} alt="fb" className="cursor-pointer" />
          <img src={twitter} alt="twitter" className="cursor-pointer" />
          <img src={youtube} alt="youtube" className="cursor-pointer" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
