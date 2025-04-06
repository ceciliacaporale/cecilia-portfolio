import React, { useState, useEffect } from "react";
import Tablet from "../pages/Tablet";
import Mobile from "../pages/Mobile";
import Desktop from "../pages/Desktop";

const Responsive: React.FC = () => {
  const [screenSize, setScreenSize] = useState<"mobile" | "tablet" | "desktop" | null>(null);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.screen.width;

      if (width < 796) {
        setScreenSize("mobile");
      } else if (width >= 796 && width < 1251) {
        setScreenSize("tablet");
      } else {
        setScreenSize("desktop");
      }
    };
  
    if (typeof window !== "undefined") {
      checkScreenSize();
      window.addEventListener("resize", checkScreenSize);
    }
  
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  if (screenSize === null) return null;

  return screenSize === "mobile" ? (
    <Mobile />
  ) : screenSize === "tablet" ? (
    <Tablet />
  ) : (
    <Desktop />
  );
};

export default Responsive;
