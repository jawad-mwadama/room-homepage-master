import desktopHeroImage1 from "../../assets/images/desktop-image-hero-1.jpg";
import mobileHeroImage1 from "../../assets/images/desktop-image-hero-1.jpg";
import previous from "../../assets/images/icon-angle-left.svg";
import next from "../../assets/images/icon-angle-right.svg";

function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center lg:flex-row">
      <picture>
        {/* Desktop image loads on large screens (1024px and up) */}
        <source media="(min-width: 1024px)" srcSet={desktopHeroImage1} />
        {/* Mobile image acts as the default fallback */}
        <img
          src={mobileHeroImage1}
          alt="Hero banner"
          className="block h-auto w-full object-cover lg:h-135 lg:w-auto"
        />
      </picture>

      <span className="absolute right-0 bottom-[29.2%] flex justify-between bg-black md:right-[36.1%] md:bottom-0">
        <button className="hover bg-black p-6 duration-150 ease-in-out hover:bg-stone-500">
          <img className="h-5 w-auto" src={previous} alt="previous icon" />
        </button>
        <button className="hover bg-black p-6 duration-150 ease-in-out hover:bg-stone-500">
          <img className="h-5 w-auto" src={next} alt="next icon" />
        </button>
      </span>

      {/* text */}
      <div className="max-w-xl p-4">
        <h3 className="py-4 font-spartan text-xl/6 font-semibold tracking-widest">
          ABOUT OUR FURNITURE
        </h3>
        <p className="font-spartan text-stone-400">
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </p>
      </div>
    </section>
  );
}

export default Hero;
