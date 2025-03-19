import React, { useState, useEffect } from "react";
import Desktop from "../components/Desktop";
import Mobile from "../components/Mobile";

const Responsive: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null); 
  console.log(window.innerWidth);
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 990);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  if (isMobile === null) return null;

  return isMobile ? <Mobile /> : <Desktop />;
};

export default Responsive;
