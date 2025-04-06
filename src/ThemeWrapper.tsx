import React, { createContext, useContext, useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';

type ThemeType = 'light' | 'dark';

interface Props {
  children: React.ReactNode;
}

interface ThemeContextProps {
  theme: ThemeType;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: 'light',
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

const ThemeWrapper: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>('light');
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.classList.toggle('light', theme === 'light');
  }, [theme]);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as ThemeType;
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const preferredTheme = storedTheme || (systemPrefersDark ? 'dark' : 'light');
    setTheme(preferredTheme);

    document.documentElement.classList.toggle('dark', preferredTheme === 'dark');
    document.documentElement.classList.toggle('light', preferredTheme === 'light');

    setIsHydrated(true);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    document.documentElement.classList.toggle('light', newTheme === 'light');
  };

  const themeObject = theme === 'light' ? lightTheme : darkTheme;

  if (!isHydrated) return null;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={themeObject}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeWrapper;
