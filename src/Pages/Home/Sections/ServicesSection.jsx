import { useEffect, useState } from "react";
import PrimaryButton from "../../../Components/Buttons/PrimaryButton";
import ServiceCard from "../../../Components/Cards/ServiceCard";
import SectionHeading from "../../../Components/SectionHeading/SectionHeading";

const ServicesSection = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/services")
      .then((res) => res.json())
      .then((data) => {
        const items = data.slice(0, 6);
        setServices(items);
      });
  }, []);

  return (
    <section id="our-portfolio" className="container-2 py-16 md:py-20 lg:py-28">
      <SectionHeading data-aos="fade-up">
        Our Awesome <span className="text-secondary1">Services</span>
      </SectionHeading>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div key={service.title} data-aos="fade-up" data-aos-delay={index * 80}>
            <ServiceCard
              service={service}
            />
          </div>
        ))}
      </div>

      <div className="mt-12 text-center" data-aos="fade-up">
        <PrimaryButton to="/contact-us">Explore More</PrimaryButton>
      </div>
    </section>
  );
};

export default ServicesSection;
