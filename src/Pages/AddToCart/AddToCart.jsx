import { FaCalendarCheck, FaCheckCircle, FaCreditCard, FaTrash } from "react-icons/fa";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import useAddCard from "../../hooks/useAddCard";

const cartBenefits = [
  "Professional consultation included",
  "Secure checkout confirmation",
  "Flexible appointment scheduling",
];

const getPriceValue = (price) => {
  if (typeof price === "number") {
    return price;
  }

  return Number(String(price || "").replace(/[^0-9.]/g, "")) || 0;
};

const formatPrice = (amount) => `$${amount.toFixed(2)}`;

const AddToCart = () => {
  const [addToCart, , isLoading, error] = useAddCard();
  const cartItems = Array.isArray(addToCart) ? addToCart : [];
  const totalPrice = cartItems.reduce(
    (total, item) => total + getPriceValue(item.price),
    0
  );

  return (
    <main className="min-h-screen bg-primary1 py-12 md:py-16">
      <section className="container-2">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-8">
            <p className="text-secondary1 font-semibold uppercase tracking-[0.18em]">
              Add To Cart
            </p>
            <h1 className="mt-4 max-w-3xl text-nu20">Your Selected Service</h1>
            <p className="mt-4 max-w-2xl text-nu40">
              Review your beauty service before moving forward with appointment
              confirmation.
            </p>

            {isLoading ? (
              <div className="mt-8 rounded-lg border border-nu30 bg-white p-6 text-nu40 shadow-xl">
                Loading cart services...
              </div>
            ) : error ? (
              <div className="mt-8 rounded-lg border border-nu30 bg-white p-6 text-secondary1 shadow-xl">
                Failed to load cart services.
              </div>
            ) : cartItems.length === 0 ? (
              <div className="mt-8 rounded-lg border border-nu30 bg-white p-6 text-nu40 shadow-xl">
                Your cart is empty.
              </div>
            ) : (
              <div className="mt-8 space-y-5">
                {cartItems.map((item) => (
                  <div
                    key={item._id || item.menuId || item.name}
                    className="rounded-lg border border-nu30 bg-white p-5 shadow-xl sm:p-6"
                  >
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                      <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary1 text-xl font-bold text-secondary1">
                        {item.icon}
                      </span>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                          <div>
                            <h2 className="text-[24px] text-nu20">
                              {item.name || item.title}
                            </h2>
                            <p className="mt-3 text-nu40">
                              {item.description ||
                                "Review your selected beauty service before confirming your appointment."}
                            </p>
                          </div>
                          <p className="shrink-0 text-[26px] font-bold text-secondary1">
                            {item.price}
                          </p>
                        </div>

                        <div className="mt-6 grid gap-3 sm:grid-cols-3">
                          {cartBenefits.map((benefit) => (
                            <div
                              key={benefit}
                              className="flex items-start gap-2 rounded-md bg-primary1 px-3 py-3"
                            >
                              <FaCheckCircle className="mt-1 shrink-0 text-secondary1" />
                              <p className="text-[14px] font-medium text-nu20">
                                {benefit}
                              </p>
                            </div>
                          ))}
                        </div>

                        <button
                          type="button"
                          className="mt-6 inline-flex items-center gap-2 text-[15px] font-semibold text-nu40 transition hover:text-secondary1"
                        >
                          <FaTrash />
                          Remove service
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <aside className="lg:col-span-4">
            <div className="rounded-lg border border-nu30 bg-white p-6 shadow-xl lg:sticky lg:top-24">
              <h2 className="text-[24px] text-nu20">Order Summary</h2>

              <div className="mt-6 space-y-4 border-y border-nu30 py-6">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-nu40">Services</p>
                  <p className="text-right font-semibold text-nu20">
                    {cartItems.length}
                  </p>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <p className="text-nu40">Subtotal</p>
                  <p className="font-semibold text-nu20">
                    {formatPrice(totalPrice)}
                  </p>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <p className="text-nu40">Total</p>
                  <p className="text-[28px] font-bold text-secondary1">
                    {formatPrice(totalPrice)}
                  </p>
                </div>
              </div>

              <PrimaryButton className="mt-6 w-full" to="/contact-us">
                Confirm Booking
              </PrimaryButton>

              <div className="mt-5 space-y-3 text-nu40">
                <div className="flex items-center gap-3">
                  <FaCreditCard className="shrink-0 text-secondary1" />
                  <p>Secure checkout support</p>
                </div>
                <div className="flex items-center gap-3">
                  <FaCalendarCheck className="shrink-0 text-secondary1" />
                  <p>Appointment confirmation after contact</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default AddToCart;
