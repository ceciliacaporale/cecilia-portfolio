import React, { useState, useEffect } from "react";
import Desktop from "../components/Desktop";
import Tablet from "../components/Tablet";
import Mobile from "../components/Mobile";

const Responsive: React.FC = () => {
  const [screenSize, setScreenSize] = useState<"mobile" | "tablet" | "desktop" | null>(null);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.screen.width;

      if (width < 653) {
        setScreenSize("mobile");
      } else if (width >= 653 && width < 1024) {
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
