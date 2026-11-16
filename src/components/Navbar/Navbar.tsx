import logo from "../../assets/images/logo.svg";
import hamburger from "../../assets/images/icon-hamburger.svg";
import iconClose from "../../assets/images/icon-close.svg";
import { useState } from "react";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <nav className="absolute z-10 p-6">
        <div className="hidden items-center justify-center gap-12 md:flex">
          <img src={logo} alt="/" />

          {/* desktop nav */}
          <div>
            <ul className="flex items-center space-x-8 text-white">
              <li>
                <a href="/home" className="group relative inline-block pb-1">
                  Home
                  <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-white transition-all duration-300 group-hover:w-2/3"></span>
                </a>
              </li>
              <li>
                <a href="/shop" className="group relative inline-block pb-1">
                  Shop
                  <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-white transition-all duration-300 group-hover:w-2/3"></span>
                </a>
              </li>
              <li>
                <a href="/about" className="group relative inline-block pb-1">
                  About
                  <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-white transition-all duration-300 group-hover:w-2/3"></span>
                </a>
              </li>
              <li>
                <a href="/contact" className="group relative inline-block pb-1">
                  Contact
                  <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-white transition-all duration-300 group-hover:w-2/3"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <nav className="relative">
        {/* mobile nav */}
        <div className="absolute top-0 left-0 z-10 flex w-full items-center px-6 py-6 lg:hidden">
          {/* Hamburger stays on the left with the states */}
          <button
            type="button"
            aria-expanded={nav}
            onClick={handleNav}
            className={`fixed inset-0 z-10 bg-black/50 transition-opacity duration-300 ease-in-out ${
              nav ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            {nav ? (
              <img src={iconClose} alt="" className="flex items-center" />
            ) : (
              <img src={hamburger} alt="" />
            )}
          </button>

          {/* Logo is pushed to the exact center */}
          <div className="mx-auto">
            <a href="/">
              <img src={logo} alt="Logo" />
            </a>
          </div>

          {/* Invisible spacer matching the hamburger width so the logo is dead-center */}
          <div className="w-6" aria-hidden="true"></div>

          {/* mobile navlinks navigation */}
          <div
            className={`fixed inset-x-0 top-0 z-20 bg-black/50 shadow-md transition-transform duration-300 ease-in-out ${nav ? "translate-x-0" : "-translate-y-full"}`}
          >
            <ul className="flex items-center justify-end gap-4 bg-white p-8 font-semibold">
              <li>
                <a href="/home">Home</a>
              </li>
              <li>
                <a href="/shop">Shop</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
