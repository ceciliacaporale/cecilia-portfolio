import React, { useEffect, useState } from "react";
import Tablet from "../layouts/Home/Tablet";
import Mobile from "../layouts/Home/Mobile";
import Desktop from "../layouts/Home/Desktop";

type ScreenType = "mobile" | "tablet" | "desktop";

const getScreenType = (width: number): ScreenType => {
  if (width < 606) return "mobile";
  if (width < 1251) return "tablet";
  return "desktop";
};

const Responsive: React.FC = () => {
  const [screenType, setScreenType] = useState<ScreenType | null>(null);

  useEffect(() => {
    const updateScreenType = () => {
      const width = window.innerWidth;
      const newType = getScreenType(width);

      setScreenType((prevType) => (prevType !== newType ? newType : prevType));
    };

    updateScreenType();
    window.addEventListener("resize", updateScreenType);

    return () => {
      window.removeEventListener("resize", updateScreenType);
    };
  }, []);

  if (!screenType) return null;

  const Layouts: Record<ScreenType, JSX.Element> = {
    mobile: <Mobile />,
    tablet: <Tablet />,
    desktop: <Desktop />,
  };

  return Layouts[screenType];
};

export default Responsive;
