import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const revealElements = () => {
  const elements = document.querySelectorAll(".wow");

  if (!("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("animated"));
    return undefined;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animated");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -40px",
    },
  );

  elements.forEach((element) => observer.observe(element));
  return () => observer.disconnect();
};

export const useWow = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    if (window.WOW) {
      const wow = new window.WOW({
        boxClass: "wow",
        animateClass: "animated",
        offset: 80,
        mobile: true,
        live: true,
      });

      wow.init();
      return undefined;
    }

    return revealElements();
  }, [pathname]);
};
