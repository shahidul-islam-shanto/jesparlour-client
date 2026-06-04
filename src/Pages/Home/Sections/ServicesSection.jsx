import { useEffect, useState } from "react";
import PrimaryButton from "../../../Components/Buttons/PrimaryButton";
import ServiceCard from "../../../Components/Cards/ServiceCard";
import SectionHeading from "../../../Components/SectionHeading/SectionHeading";
// import { services as fallbackServices } from "../../../data/homePageData";

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
    <section id="our-portfolio" className="container-2 py-20 lg:py-28">
      <SectionHeading className="wow fadeInUp">
        Our Awesome <span className="text-secondary1">Services</span>
      </SectionHeading>

      <div className="grid grid-cols-12 gap-4 mt-10">
        {services.map((service, index) => (
          <div className="col-span-4">
            <ServiceCard
              key={service.index}
              service={service}
              // delay={`${index * 0.12}s`}
            />
          </div>
        ))}
      </div>

      <div className="wow fadeInUp mt-12 text-center">
        <PrimaryButton to="/contact-us">Explore More</PrimaryButton>
      </div>
    </section>
  );
};

export default ServicesSection;
