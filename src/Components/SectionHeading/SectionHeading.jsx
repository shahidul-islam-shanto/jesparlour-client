const SectionHeading = ({ children, className = "", ...props }) => {
  return (
    <div className={`mx-auto max-w-[620px] text-center ${className}`} {...props}>
      <h2 className="text-[32px] font-bold leading-tight md:text-[42px]">
        {children}
      </h2>
    </div>
  );
};

export default SectionHeading;
