import { Link } from "react-router-dom";

const ServiceCard = ({ service, delay = "0s" }) => {
  
  return (
    <Link to={"/service"}>
      <article
        className="wow fadeInUp rounded-md bg-white p-8 text-center shadow-[0_12px_36px_rgba(0,0,0,0.08)] transition hover:-translate-y-1"
        style={{ animationDelay: delay }}
      >
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-nu30 text-xl font-bold text-secondary1">
          {service.icon}
        </div>
        <h3 className="mt-6 text-[20px] font-semibold">{service.title}</h3>
        <p className="mt-2 text-[20px] font-semibold text-secondary1">
          {service.price}
        </p>
        <p className="mt-4 text-[15px] leading-7 text-nu40">
          {service.description}
        </p>
      </article>
    </Link>
  );
};

export default ServiceCard;
