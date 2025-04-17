import { useState, useEffect } from "react";
import { Tab, TabsContainer } from "./Tabs.styles";
import { useTheme } from "styled-components";

const getTabs = (theme: any) => [
  { id: 1, name: "home", link: "/", color: theme.colors.pink },
  { id: 2, name: "sobre mim", link: "/about", color: theme.colors.blue },
  { id: 3, name: "projetos", link: "/projects", color: theme.colors.orange },
  { id: 4, name: "arquivos", link: "/files", color: theme.colors.lime },
];

const Tabs = () => {
  const theme = useTheme();

  const [screenSize, setScreenSize] = useState<"mobile" | "tablet" | "desktop">("desktop");
  const [tabs, setTabs] = useState<{ id: number; name: string; link: string; color: string }[]>([]);
  const [currentPath, setCurrentPath] = useState<string>("");

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;

      if (width < 796) setScreenSize("mobile");
      else if (width < 1251) setScreenSize("tablet");
      else setScreenSize("desktop");
    };

    if (typeof window !== "undefined") {
      checkScreenSize();
      setCurrentPath(window.location.pathname);
      window.addEventListener("resize", checkScreenSize);
    }

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    const updatedTabs = getTabs(theme);

    const filteredTabs =
      screenSize === "mobile"
        ? updatedTabs.filter((tab) => tab.link !== currentPath)
        : updatedTabs;

    setTabs(filteredTabs);
  }, [screenSize, currentPath, theme]);

  return (
    <TabsContainer>
      {tabs.map((tab) => (
        <Tab key={tab.id} color={tab.color}>
          <a
            href={tab.link}
            aria-label={`Ir para ${tab.name}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            {tab.name}
            <span className="tab-close">x</span>
          </a>
        </Tab>
      ))}
    </TabsContainer>
  );
};

export default Tabs;
