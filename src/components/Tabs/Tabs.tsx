import { useState, useEffect } from "react";
import { Tab, TabsContainer } from "./Tabs.styles";
import { useTheme } from "styled-components";

const Tabs = () => {
  const [screenSize, setScreenSize] = useState<"mobile" | "tablet" | "desktop">("desktop");
  const theme = useTheme();
  const [tabs, setTabs] = useState<{ id: number; name: string; link: string; color: string }[]>([]);
  const [currentPath, setCurrentPath] = useState<string>("");

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
      setCurrentPath(window.location.pathname);
      window.addEventListener("resize", checkScreenSize);
    }

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const allTabs = [
    { id: 1, name: "home", link: "/", color: theme.colors.pink },
    // { id: 2, name: "sobre mim", link: "/about", color: theme.colors.blue },
    { id: 3, name: "projetos", link: "/projects", color: theme.colors.orange },
    { id: 4, name: "arquivos", link: "/files", color: theme.colors.lime },
  ];

  useEffect(() => {
    if (screenSize === "mobile") {
      setTabs(allTabs.filter((tab) => tab.link !== currentPath));
    } else {
      setTabs(allTabs);
    }
  }, [screenSize, currentPath]);

  return (
    <TabsContainer>
      {tabs.map((tab) => (
        <Tab key={tab.id} color={tab.color}>
          <a href={tab.link} aria-label="Abas para outras páginas" style={{ textDecoration: "none", color: "inherit" }}>
            {tab.name}
            <span className="tab-close">x</span>
          </a>
        </Tab>
      ))}
    </TabsContainer>
  );
};

export default Tabs;
