import { useState } from "react";
import logo from "../../assets/images/logo.svg";
import hamburger from "../../assets/images/icon-hamburger.svg";
import iconClose from "../../assets/images/icon-close.svg";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav((prev) => !prev);
  };

  return (
    <nav className="relative z-20">
      {/* Desktop Nav (visible at md and up) */}
      <div className="absolute top-0 left-0 hidden items-center gap-12 p-10 md:flex">
        <a href="/">
          <img src={logo} alt="Home" />
        </a>

        <ul className="flex items-center space-x-8 text-white lowercase">
          {["Home", "Shop", "About", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`/${item.toLowerCase()}`}
                className="group relative inline-block pb-1"
              >
                {item}
                <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-white transition-all duration-300 group-hover:w-2/3" />
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Nav (hidden at md and up) */}
      <div className="absolute top-0 left-0 flex w-full items-center px-6 py-8 md:hidden">
        {/* Full-screen dark backdrop */}
        <div
          onClick={handleNav}
          aria-hidden="true"
          className={`fixed inset-0 z-10 bg-black/50 transition-opacity duration-300 ease-in-out ${
            nav ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        />

        {/* Toggle button */}
        <button
          type="button"
          aria-label={nav ? "Close menu" : "Open menu"}
          aria-expanded={nav}
          onClick={handleNav}
          className="relative z-30"
        >
          <img src={nav ? iconClose : hamburger} alt="" />
        </button>

        {/* Centered logo */}
        <div className="mx-auto">
          <a href="/">
            <img src={logo} alt="Home" />
          </a>
        </div>

        {/* Spacer for centering */}
        <div className="w-6" aria-hidden="true" />

        {/* Slide-down white drawer */}
        <div
          className={`fixed inset-x-0 top-0 z-20 bg-white px-6 py-8 shadow-md transition-transform duration-300 ease-in-out ${
            nav ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <ul className="flex items-center justify-end gap-6 font-semibold lowercase">
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
  );
}

export default Navbar;
