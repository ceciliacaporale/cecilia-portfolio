import React, { useState, useEffect } from "react";
import { ContentArea, ContainerMain, ProjectsWrapper, ContainerToggle } from "./ResponsiveLayout.styles";
import ThemeToggleButton from "../../components/ThemeToggleButton";

interface LayoutProps {
  children: React.ReactNode;
}

const ResponsiveLayout: React.FC<LayoutProps> = ({ children }) => {
  const [screenSize, setScreenSize] = useState<"mobile" | "tablet" | "desktop" | null>(null);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;

      if (width < 606) {
        setScreenSize("mobile");
      } else if (width >= 606 && width < 1251) {
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
        <ContainerToggle>
          <ThemeToggleButton />
        </ContainerToggle>
      <ContainerMain>
        <ContentArea>{children}</ContentArea>
      </ContainerMain>
    </ProjectsWrapper>
  );
};

export default ResponsiveLayout;