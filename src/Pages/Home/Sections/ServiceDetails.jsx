import {
  FaCalendarCheck,
  FaCheckCircle,
  FaCreditCard,
  FaHeadset,
  FaLock,
  FaMagic,
  FaRegClock,
  FaShieldAlt,
} from "react-icons/fa";
import PrimaryButton from "../../../Components/Buttons/PrimaryButton";

const keyFeatures = [
  "Personalized skin and beauty consultation before your session",
  "Deep cleansing, exfoliation, massage, mask, and finishing care",
  "Premium, skin-friendly products selected for your needs",
  "Expert styling guidance for a polished, camera-ready look",
  "Relaxing private service environment with professional hygiene standards",
  "Aftercare recommendations to help your glow last longer",
];

const processSteps = [
  {
    title: "Choose Your Time",
    description:
      "Pick a convenient appointment slot and share your beauty goals with our care team.",
  },
  {
    title: "Meet Your Specialist",
    description:
      "Your specialist reviews your needs, skin type, preferences, and event plans before treatment.",
  },
  {
    title: "Enjoy The Treatment",
    description:
      "Relax through a carefully layered service designed to refresh, refine, and restore confidence.",
  },
  {
    title: "Leave With Aftercare",
    description:
      "Receive simple product and routine guidance so your results stay luminous beyond the visit.",
  },
];

const quickValues = [
  { icon: FaHeadset, text: "Priority Support" },
  { icon: FaRegClock, text: "Flexible Scheduling" },
  { icon: FaShieldAlt, text: "Satisfaction Focused" },
  { icon: FaLock, text: "100% Secure Payment" },
  { icon: FaCalendarCheck, text: "Cancel Anytime" },
];

const ServiceDetails = () => {
  return (
    <section className="bg-primary1 py-14 md:py-20">
      <div className="container-2">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
          <main className="lg:col-span-8">
            <p className="text-secondary1 font-semibold uppercase tracking-[0.18em]">
              Premium Beauty Service
            </p>
            <h1 className="mt-4 max-w-3xl text-nu20">
              Reveal Your Signature Glow With Expert Care
            </h1>
            <p className="mt-5 max-w-3xl text-nu40">
              Step into a refined beauty experience created for clients who want
              visible results, calm attention, and a finish that feels
              effortlessly polished. Our premium glow treatment blends
              professional consultation, targeted skin care, and elegant styling
              details to help you look fresh, confident, and ready for any
              occasion.
            </p>

            <div className="mt-10 border-y border-nu30 py-8">
              <h2 className="text-nu20">What's Included / Key Features</h2>
              <p className="mt-3 max-w-2xl text-nu40">
                Every session is tailored around your needs, so the service
                feels personal from the first consultation to the final glow.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {keyFeatures.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <FaCheckCircle className="mt-1 shrink-0 text-secondary1" />
                    <p className="text-nu40">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-nu20">How It Works</h2>
              <p className="mt-3 max-w-2xl text-nu40">
                A simple, transparent process keeps your visit comfortable,
                predictable, and focused on the result you came for.
              </p>
              <div className="mt-7 grid gap-5 md:grid-cols-2">
                {processSteps.map((step, index) => (
                  <div
                    key={step.title}
                    className="rounded-lg border border-nu30 bg-white p-6 shadow-sm"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-nu30 text-base font-semibold text-secondary1">
                      {index + 1}
                    </span>
                    <h3 className="mt-5 text-[20px] text-nu20">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-nu40">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </main>

          <aside className="lg:col-span-4">
            <div className="sticky top-6 rounded-lg border border-nu30 bg-white p-6 shadow-xl">
              <div className="flex items-center gap-3 text-secondary1">
                <FaMagic />
                <p className="font-semibold">Complete Glow Package</p>
              </div>
              <div className="mt-5">
                <p className="text-nu40">Starting from</p>
                <p className="mt-2 text-[42px] font-bold leading-none text-nu20">
                  $199
                  <span className="inline text-lg font-medium text-nu40">
                    /session
                  </span>
                </p>
              </div>

              <div className="mt-6 space-y-4 border-y border-nu30 py-6">
                {quickValues.map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary1 text-secondary1">
                      <Icon />
                    </span>
                    <p className="font-medium text-nu20">{text}</p>
                  </div>
                ))}
              </div>

              <PrimaryButton className="mt-6 w-full" to="/contact-us">
                Book Your Glow Session
              </PrimaryButton>

              <div className="mt-5 flex items-center justify-center gap-2 text-nu40">
                <FaCreditCard className="text-secondary1" />
                <p>Secure checkout and appointment confirmation</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
