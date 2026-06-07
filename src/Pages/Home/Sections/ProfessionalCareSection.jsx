import heroImg from "../../../assets/hero.png";
import { stats } from "../../../data/homePageData";

const ProfessionalCareSection = () => {
  return (
    <section className="bg-primary1 py-20 lg:py-28">
      <div className="container-2 grid items-center gap-12 lg:grid-cols-[0.9fr_1fr]">
        <div className="overflow-hidden rounded-md bg-nu30" data-aos="fade-right">
          <img
            src={heroImg}
            alt="Professional salon treatment"
            className="mx-auto h-full max-h-115 w-full object-contain p-8"
          />
        </div>

        <div data-aos="fade-left">
          <h2 className="max-w-140 text-[32px] font-bold leading-tight md:text-[42px]">
            Let us handle your skin
            <span className="text-secondary1">Professionally</span>.
          </h2>
          <p className="mt-6 max-w-140 text-[16px] leading-8 text-nu40">
            Our specialists combine consultation, product knowledge, and careful
            technique so each appointment feels personal and consistent.
          </p>
          <div className="mt-10 flex flex-wrap gap-10 sm:gap-14">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-[42px] font-bold text-secondary1">
                  {stat.value}
                </p>
                <span className="mt-2 text-[16px] font-medium text-nu40">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalCareSection;
