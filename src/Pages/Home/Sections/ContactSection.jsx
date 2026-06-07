import PrimaryButton from "../../../Components/Buttons/PrimaryButton";
import SectionHeading from "../../../Components/SectionHeading/SectionHeading";

const inputClass =
  "rounded-md border border-transparent bg-white px-5 py-4 text-[16px] transition focus:border-secondary1";

const ContactSection = () => {
  return (
    <section id="contact-us" className="bg-primary1 py-20 lg:py-28">
      <div className="container-2">
        <SectionHeading data-aos="fade-up">
          Let us handle your project, professionally.
        </SectionHeading>

        <form className="mx-auto mt-12 grid max-w-180 gap-5" data-aos="fade-up">
          <div className="grid gap-5 md:grid-cols-2">
            <input type="text" placeholder="First name" className={inputClass} />
            <input type="text" placeholder="Last name" className={inputClass} />
          </div>
          <input
            type="email"
            placeholder="Email address"
            className={inputClass}
          />
          <textarea
            rows="6"
            placeholder="Your message"
            className={`${inputClass} resize-none`}
          />
          <PrimaryButton type="submit" className="mx-auto px-12">
            Send Message
          </PrimaryButton>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
