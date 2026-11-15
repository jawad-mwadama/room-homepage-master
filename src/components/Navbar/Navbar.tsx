import logo from "../../assets/images/logo.svg";
import hamburger from "../../assets/images/icon-hamburger.svg";

function Navbar() {
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
          {/* Hamburger stays on the left */}
          <button type="button" aria-label="Open menu">
            <img src={hamburger} alt="Menu" />
          </button>

          {/* Logo is pushed to the exact center */}
          <div className="mx-auto">
            <img src={logo} alt="Logo" />
          </div>

          {/* Invisible spacer matching the hamburger width so the logo is dead-center */}
          <div className="w-6" aria-hidden="true"></div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
