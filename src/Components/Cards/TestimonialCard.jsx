const getInitials = (name) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("");

const TestimonialCard = ({ item, delay = 0, className = "" }) => {
  return (
    <article
      className={`h-full rounded-md border border-nu30 bg-white p-7 ${className}`}
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-nu30 text-lg font-bold text-secondary1">
          {getInitials(item.name)}
        </div>
        <div>
          <h3 className="text-[18px] font-semibold">{item.name}</h3>
          <p className="text-[14px] font-medium text-nu40">{item.role}</p>
        </div>
      </div>
      <p className="mt-6 text-[15px] leading-7 text-nu40">{item.quote}</p>
      <p className="mt-5 text-[15px] font-semibold text-secondary1">
        5.0 rating
      </p>
    </article>
  );
};

export default TestimonialCard;
