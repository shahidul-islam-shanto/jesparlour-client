import { Link } from "react-router-dom";

const ServiceCard = ({ service , delay}) => {
  if (!service) return null;

  const { icon, title, price, description } = service;

  return (
    <Link to={"/serviceDetails"}>
      <div className=" px-8 py-8 text-center shadow-xl rounded-2xl">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-nu20 text-xl font-bold text-secondary1">
          {icon}
        </div>
        <h3 className="mt-6 text-[20px] font-semibold text-nu20">{title}</h3>
        <p className="mt-2 text-[20px] font-semibold text-secondary1">
          {price}
        </p>
        <p className="mt-4 text-[15px] leading-7 text-nu40">{description}</p>
      </div>
    </Link>
  );
};

export default ServiceCard;
