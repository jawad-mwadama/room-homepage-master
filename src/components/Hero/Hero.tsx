import desktopHeroImage1 from "../../assets/images/desktop-image-hero-1.jpg";

function Hero() {
  return (
    <section className="flex items-center justify-center">
      <img className="h-135" src={desktopHeroImage1} alt="/" />

      {/* text */}
      <div className="p-4">
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
