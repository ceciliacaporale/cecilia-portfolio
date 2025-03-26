import React, { useState, useEffect } from "react";
import Tablet from "./Tablet";
import Mobile from "./Mobile";
import Desktop from "./Desktop";

const Responsive: React.FC = () => {
  const [screenSize, setScreenSize] = useState<"mobile" | "tablet" | "desktop" | null>(null);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.screen.width;

      if (width < 653) {
        setScreenSize("mobile");
      } else if (width >= 653 && width < 1251) {
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
