// src/ScrollToTop.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Smooth scroll to top whenever the route changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // change to "auto" if you want instant jump
    });
  }, [pathname]);

  return null;
}
