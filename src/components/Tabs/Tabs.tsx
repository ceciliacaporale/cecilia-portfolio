import { useState, useEffect } from "react";
import { Tab, TabsContainer } from "./Tabs.styles";

const Tabs = () => {
  const [screenSize, setScreenSize] = useState<"mobile" | "tablet" | "desktop">("desktop");

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
      { id: 1, name: "home", link: "/", color: "#FE87A4" },
      // { id: 2, name: "sobre mim", link: "/about", color: "#1CBFC1" },
      { id: 3, name: "projetos", link: "/projects", color: "#FFD700" },
      { id: 4, name: "arquivos", link: "/files", color: "#94EE9C" },
    ],
    tablet: [
      { id: 1, name: "home", link: "/", color: "#FE87A4" },
      // { id: 2, name: "sobre mim", link: "/about", color: "#1CBFC1" },
      { id: 3, name: "projetos", link: "/projects", color: "#FFD700" },
      { id: 4, name: "arquivos", link: "/files", color: "#94EE9C" },
    ],
    mobile: [
      { id: 1, name: "home", link: "/", color: "#FE87A4" },
      // { id: 2, name: "sobre mim", link: "/about", color: "#1CBFC1" },
      { id: 3, name: "projetos", link: "/projects", color: "#FFD700" },
    ],
  };

  const [tabs, setTabs] = useState(tabsData.desktop);

  useEffect(() => {
    setTabs(tabsData[screenSize]);
  }, [screenSize]);

  const handleCloseTab = (id: number) => {
    setTabs((prevTabs) => prevTabs.filter((tab) => tab.id !== id));
  };

  return (
    <TabsContainer>
      {tabs.map((tab) => (
        <Tab key={tab.id} color={tab.color}>
          <a href={tab.link} style={{ textDecoration: "none", color: "inherit" }}>
            {tab.name}
          </a>
          <span className="close-tab" onClick={() => handleCloseTab(tab.id)}>
            ✕
          </span>
        </Tab>
      ))}
    </TabsContainer>
  );
};

export default Tabs;
