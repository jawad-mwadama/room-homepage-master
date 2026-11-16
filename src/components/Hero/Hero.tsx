import previous from "../../assets/images/icon-angle-left.svg";
import next from "../../assets/images/icon-angle-right.svg";
import iconArrow from "../../assets/images/icon-arrow.svg";
import { useState } from "react";
import { heroData } from "../../data/data";

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentSlide = heroData[currentIndex];

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? heroData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= heroData.length - 1 ? 0 : prev + 1));
  };

  const buttonStyles =
    "flex size-14 items-center justify-center bg-black transition-colors duration-150 hover:bg-stone-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:bg-stone-600 cursor-pointer lg:size-16";
  return (
    <section className="flex flex-col lg:flex-row">
      {/* Hero image and navigation */}
      <div className="relative w-full lg:w-[63%]">
        <picture>
          <source
            media="(min-width: 1024px)"
            srcSet={currentSlide.desktopImage}
          />

          <img
            src={currentSlide.mobileImage}
            alt="Furniture interior"
            className="block h-full w-full object-cover"
          />
        </picture>

        {/* Navigation buttons */}

        <div className="absolute right-0 bottom-0 flex gap-1 bg-black lg:right-[-14.6%]">
          <button
            type="button"
            aria-label="Previous slide"
            onClick={prevSlide}
            className={buttonStyles}
          >
            <img src={previous} alt="" className="h-5 w-auto" />
          </button>

          <button
            type="button"
            aria-label="Next slide"
            onClick={nextSlide}
            className={buttonStyles}
          >
            <img src={next} alt="" className="h-5 w-auto" />
          </button>
        </div>
      </div>

      {/* Hero text */}
      <div className="flex w-full flex-col justify-center p-8 lg:w-[40%] lg:p-19">
        <h3 className="py-4 font-spartan text-4xl font-bold lg:text-5xl">
          {currentSlide.title}
        </h3>

        <p className="font-spartan text-stone-400">{currentSlide.paragraph}</p>

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
