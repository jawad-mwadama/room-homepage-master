import desktopHeroImage1 from "../../assets/images/desktop-image-hero-1.jpg";
import mobileHeroImage1 from "../../assets/images/mobile-image-hero-1.jpg";
import previous from "../../assets/images/icon-angle-left.svg";
import next from "../../assets/images/icon-angle-right.svg";
import iconArrow from "../../assets/images/icon-arrow.svg";

function Hero() {
  return (
    <section className="flex flex-col lg:flex-row">
      {/* Hero image and navigation */}
      <div className="relative w-full lg:w-[58%]">
        <picture>
          <source media="(min-width: 1024px)" srcSet={desktopHeroImage1} />

          <img
            src={mobileHeroImage1}
            alt="Furniture interior"
            className="block h-full w-full object-cover"
          />
        </picture>

        {/* Navigation buttons */}
        <div className="absolute right-0 bottom-0 flex lg:right-[-14%]">
          <button
            aria-label="Previous slide"
            className="bg-black p-5 transition-colors duration-150 hover:bg-stone-500 lg:p-6"
          >
            <img src={previous} alt="" className="h-5 w-auto" />
          </button>

          <button
            aria-label="Next slide"
            className="bg-black p-5 transition-colors duration-150 hover:bg-stone-500 lg:p-6"
          >
            <img src={next} alt="" className="h-5 w-auto" />
          </button>
        </div>
      </div>

      {/* Hero text */}
      <div className="flex w-full flex-col justify-center p-8 lg:w-[40%] lg:p-19">
        <h3 className="py-4 font-spartan text-4xl font-bold lg:text-5xl">
          Discover Innovative ways to decorate
        </h3>

        <p className="font-spartan text-stone-400">
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </p>

        <span className="cursor-pointer space-x-4 py-4">
          <a href="/" className="font-spartan tracking-[0.50em]">
            SHOP NOW
          </a>
          <button>
            <img src={iconArrow} className="text-stone-400" alt="/" />
          </button>
        </span>
      </div>
    </section>
  );
}

export default Hero;
