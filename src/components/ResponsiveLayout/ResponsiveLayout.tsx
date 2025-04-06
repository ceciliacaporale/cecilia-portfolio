import React, { useState, useEffect } from "react";
import { ContentArea, ContainerMain, ProjectsWrapper } from "./ResponsiveLayout.styles";
import ThemeToggleButton from "../../ThemeToggleButton/ThemeToggleButton";

interface LayoutProps {
  children: React.ReactNode;
}

const ResponsiveLayout: React.FC<LayoutProps> = ({ children }) => {
  const [screenSize, setScreenSize] = useState<"mobile" | "tablet" | "desktop" | null>(null);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;

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

  return (
    <ProjectsWrapper>
       <ThemeToggleButton />
      <ContainerMain>
        <ContentArea>{children}</ContentArea>
      </ContainerMain>
    </ProjectsWrapper>
  );
};

export default ResponsiveLayout;