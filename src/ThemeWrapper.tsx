import React, { createContext, useContext, useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';

type ThemeType = 'light' | 'dark';

interface Props {
  children: React.ReactNode;
  initialTheme?: ThemeType;
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

const ThemeWrapper: React.FC<Props> = ({ children, initialTheme }) => {
  const [theme, setTheme] = useState<ThemeType>('light');
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const resolved = initialTheme
      ?? (localStorage.getItem('theme') as ThemeType | null)
      ?? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

    setTheme(resolved);
    setIsHydrated(true);
  }, [initialTheme]);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.classList.toggle('light', theme === 'light');
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  if (!isHydrated) return null;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeWrapper;