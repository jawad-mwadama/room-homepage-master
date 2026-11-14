import logo from "../../assets/images/logo.svg";

function Navbar() {
  return (
    <nav className="absolute z-10 p-6">
      <div className="flex items-center justify-center gap-12">
        <img src={logo} alt="/" />

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
  );
}

export default Navbar;
