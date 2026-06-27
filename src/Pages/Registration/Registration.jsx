import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import heroImg from "../../assets/hero.png";
import useAuth from "../../hooks/useAuth";

const Registration = () => {
  const { createUser } = useAuth();
  

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.firstName.value;
    const lname = form.lastName.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(name, lname, email, password)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          title: "Registration Successful!",
          icon: "success",
          draggable: true,
        });
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          title: "Registration failed",
          text: error.message || "Something went wrong. Please try again.",
          icon: "error",
        });
      });
  };

  return (
    <section className="bg-primary1 py-16 md:py-20">
      <div className="container-2 grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative hidden min-h-160 overflow-hidden rounded-md bg-nu30 lg:block">
          <div className="absolute inset-x-12 bottom-0 h-88 rounded-t-full bg-nu10/80" />
          <img
            src={heroImg}
            alt="Beauty salon care"
            className="absolute bottom-0 left-1/2 z-10 w-full max-w-105 -translate-x-1/2 object-contain drop-shadow-2xl"
          />
          <div className="absolute left-8 top-8 z-20 max-w-86">
            <span className="mb-3 text-[14px] font-semibold uppercase tracking-[0.2em] text-secondary1">
              Jerin's Parlour
            </span>
            <h2 className="text-[34px] font-bold leading-tight text-nu20">
              Feel polished before your appointment begins.
            </h2>
          </div>
        </div>

        <div className="grid gap-5">
          <div className="mx-auto w-full max-w-155 rounded-md bg-nu10 px-5 py-8 shadow-[0_24px_70px_rgba(0,0,0,0.08)] sm:px-8 md:px-10 md:py-10">
            <div className="mb-8">
              <span className="mb-3 text-[14px] font-semibold uppercase tracking-[0.2em] text-secondary1">
                Join us
              </span>
              <h1 className="max-w-130 text-[32px] font-bold leading-tight text-nu20 md:text-[42px]">
                Create your salon account in a few simple steps.
              </h1>
              <p className="mt-4 max-w-120 text-[16px] leading-7 text-nu40">
                Save your details, book faster, and keep every treatment plan
                neatly connected to your profile.
              </p>
            </div>

            <form onSubmit={handleRegister} className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2">
                  <span className="text-[15px] font-semibold text-nu20">
                    First name
                  </span>
                  <input
                    type="text"
                    placeholder="First name"
                    className="w-full rounded-md border border-nu30 bg-nu10 px-4 py-3 text-[15px] text-nu20 placeholder:text-nu40 transition focus:border-secondary1 focus:ring-2 focus:ring-secondary1/20"
                    name="firstName"
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-[15px] font-semibold text-nu20">
                    Last name
                  </span>
                  <input
                    type="text"
                    placeholder="Last name"
                    className="w-full rounded-md border border-nu30 bg-nu10 px-4 py-3 text-[15px] text-nu20 placeholder:text-nu40 transition focus:border-secondary1 focus:ring-2 focus:ring-secondary1/20"
                    name="lastName"
                  />
                </label>
              </div>

              <label className="grid gap-2">
                <span className="text-[15px] font-semibold text-nu20">
                  Email
                </span>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-md border border-nu30 bg-nu10 px-4 py-3 text-[15px] text-nu20 placeholder:text-nu40 transition focus:border-secondary1 focus:ring-2 focus:ring-secondary1/20"
                  name="email"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-[15px] font-semibold text-nu20">
                  Password
                </span>
                <input
                  type="password"
                  placeholder="Create a password"
                  className="w-full rounded-md border border-nu30 bg-nu10 px-4 py-3 text-[15px] text-nu20 placeholder:text-nu40 transition focus:border-secondary1 focus:ring-2 focus:ring-secondary1/20"
                  name="password"
                />
              </label>

              <label className="flex items-start gap-2 text-[14px] leading-6 text-nu40">
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 accent-secondary1"
                />
                I agree to receive booking updates and salon care reminders.
              </label>

              <button
                type="submit"
                className="mt-2 w-full rounded-md bg-secondary1 px-5 py-3 text-[16px] font-bold text-nu10 transition hover:bg-nu20"
              >
                Create Account
              </button>
            </form>

            <p className="mt-6 text-center text-[15px] text-nu40">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-semibold text-secondary1 hover:text-nu20"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
