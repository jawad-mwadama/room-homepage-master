import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import LeftImage from "./components/LeftImage/LeftImage";
import About from "./components/About/About";
import RightImage from "./components/RightImage/RightImage";

export default function App() {
  return (
    <main className="h-full">
      <div className="relative inset-0">
        <Navbar />
        <Hero />
      </div>

      <div className="flex-col items-center sm:flex sm:flex-col md:flex-col lg:flex-row">
        <LeftImage />
        <About />
        <RightImage />
      </div>
    </main>
  );
}
