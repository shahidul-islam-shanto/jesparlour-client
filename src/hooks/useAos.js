import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";

export const useAos = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
      disable: () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    });
  }, []);

  useEffect(() => {
    AOS.refreshHard();
  }, [pathname]);
};
