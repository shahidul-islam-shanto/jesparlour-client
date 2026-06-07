import heroImg from "../../../assets/hero.png";
import PrimaryButton from "../../../Components/Buttons/PrimaryButton";

const HeroSection = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-primary1">
      <div className="container-2 grid min-h-[calc(100vh-120px)] items-center gap-10 py-12 sm:py-14 lg:grid-cols-[1fr_0.9fr] lg:py-20">
        <div className="max-w-140" data-aos="fade-right">
          <h1 className="text-[42px] font-bold leading-[1.12] text-nu20 sm:text-[56px] lg:text-[64px]">
            Beauty Salon For Every Woman
          </h1>
          <p className="mt-6 max-w-121.25 text-[16px] leading-7 text-nu40 md:text-[17px]">
            Treat yourself to expert beauty care with soft skin treatments,
            refined hair styling, and a warm salon experience built around you.
          </p>
          <PrimaryButton to="/contact-us" className="mt-8">
            Get an Appointment
          </PrimaryButton>
        </div>

        <div className="flex justify-center lg:justify-end" data-aos="fade-left">
          <div className="relative w-full max-w-110">
            <div className="absolute inset-x-6 bottom-0 h-52 rounded-t-full bg-nu30" />
            <img
              src={heroImg}
              alt="Salon beauty care model"
              className="relative z-10 mx-auto w-full max-w-90 object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
