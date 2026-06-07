import { useEffect, useMemo, useState } from "react";
import TestimonialCard from "../../../Components/Cards/TestimonialCard";
import SectionHeading from "../../../Components/SectionHeading/SectionHeading";
import { testimonials } from "../../../data/homePageData";

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const maxIndex = Math.max(testimonials.length - slidesPerView, 0);
  const currentIndex = Math.min(activeIndex, maxIndex);

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        setSlidesPerView(3);
        return;
      }

      if (window.matchMedia("(min-width: 768px)").matches) {
        setSlidesPerView(2);
        return;
      }

      setSlidesPerView(1);
    };

    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);

    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  useEffect(() => {
    const autoplay = window.setInterval(() => {
      setActiveIndex((currentIndex) =>
        currentIndex >= maxIndex ? 0 : currentIndex + 1,
      );
    }, 3200);

    return () => window.clearInterval(autoplay);
  }, [maxIndex]);

  const paginationItems = useMemo(
    () => Array.from({ length: maxIndex + 1 }, (_, index) => index),
    [maxIndex],
  );

  return (
    <section id="our-team" className="overflow-hidden py-20 lg:py-28">
      <div className="container-2">
        <SectionHeading data-aos="fade-up">Testimonials</SectionHeading>

        <div className="mt-14" data-aos="fade-up">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / slidesPerView)}%)`,
              }}
            >
              {testimonials.map((item, index) => (
                <div
                  key={item.name}
                  className="shrink-0 px-3"
                  style={{ width: `${100 / slidesPerView}%` }}
                >
                  <TestimonialCard
                    item={item}
                    delay={index * 80}
                    className="shadow-[0_12px_36px_rgba(0,0,0,0.05)]"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() =>
                setActiveIndex((currentIndex) =>
                  currentIndex <= 0 ? maxIndex : currentIndex - 1,
                )
              }
              className="flex h-11 w-11 items-center justify-center rounded-full border border-secondary1 text-xl font-semibold text-secondary1 transition hover:bg-secondary1 hover:text-white"
              aria-label="Previous testimonial"
            >
              {"<"}
            </button>

            <div className="flex items-center gap-2">
              {paginationItems.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setActiveIndex(item)}
                  className={`h-2.5 rounded-full transition ${
                    currentIndex === item
                      ? "w-8 bg-secondary1"
                      : "w-2.5 bg-nu30"
                  }`}
                  aria-label={`Go to testimonial slide ${item + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() =>
                setActiveIndex((currentIndex) =>
                  currentIndex >= maxIndex ? 0 : currentIndex + 1,
                )
              }
              className="flex h-11 w-11 items-center justify-center rounded-full border border-secondary1 text-xl font-semibold text-secondary1 transition hover:bg-secondary1 hover:text-white"
              aria-label="Next testimonial"
            >
              {">"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
