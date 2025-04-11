import { useState, useEffect } from "react";
import { Tab, TabsContainer } from "./Tabs.styles";
import { useTheme } from "styled-components";

const Tabs = () => {
  const [screenSize, setScreenSize] = useState<"mobile" | "tablet" | "desktop">("desktop");
  const theme = useTheme();

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

  const tabsData = {
    desktop: [
      { id: 1, name: "home", link: "/", color: theme.colors.pink },
      // { id: 2, name: "sobre mim", link: "/about", color: theme.colors.blue },
      // { id: 3, name: "projetos", link: "/projects", color: theme.colors.orange },
      { id: 4, name: "arquivos", link: "/files", color: theme.colors.lime },
    ],
    tablet: [
      { id: 1, name: "home", link: "/", color: theme.colors.pink },
      // { id: 2, name: "sobre mim", link: "/about", color: theme.colors.blue },
      // { id: 3, name: "projetos", link: "/projects", color: theme.colors.orange },
      // { id: 4, name: "arquivos", link: "/files", color: theme.colors.lime },
    ],
    mobile: [
      { id: 1, name: "home", link: "/", color: theme.colors.pink },
      // { id: 2, name: "sobre mim", link: "/about", color: theme.colors.blue },
      // { id: 3, name: "projetos", link: "/projects", color: theme.colors.orange },
      // { id: 4, name: "arquivos", link: "/files", color: theme.colors.lime },
    ],
  };

  const [tabs, setTabs] = useState(tabsData.desktop);

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
