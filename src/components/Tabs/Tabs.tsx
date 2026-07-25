import { useState, useEffect } from "react";
import { Tab, TabsContainer } from "./Tabs.styles";
import { useTheme } from "styled-components";
import { useLanguage } from "../../LanguageWrapper";
import { TAB_LABELS, type Language } from "../../i18n/translations";

const getTabs = (theme: any, language: Language) => [
  { id: 1, name: TAB_LABELS.home[language], link: "/", color: theme.colors.pink },
  // { id: 2, name: "sobre mim", link: "/about", color: theme.colors.blue },
  { id: 3, name: TAB_LABELS.projects[language], link: "/projects", color: theme.colors.orange },
  { id: 4, name: TAB_LABELS.files[language], link: "/files", color: theme.colors.lime },
];

const Tabs = () => {
  const theme = useTheme();
  const { language } = useLanguage();

  const [screenSize, setScreenSize] = useState<"mobile" | "tablet" | "desktop">("desktop");
  const [tabs, setTabs] = useState<{ id: number; name: string; link: string; color: string }[]>([]);
  const [currentPath, setCurrentPath] = useState<string>("");

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;

      if (width < 606) setScreenSize("mobile");
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
    const updatedTabs = getTabs(theme, language);
    const isMobile = screenSize === "mobile";
    const inNestedFilesRoute = currentPath.startsWith("/files/");

    const filteredTabs = updatedTabs.filter((tab) => {
      if (tab.link === "/files" && isMobile && inNestedFilesRoute) return false;
      return isMobile ? tab.link !== currentPath : true;
    });

    setTabs(filteredTabs);
  }, [screenSize, currentPath, theme, language]);

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
