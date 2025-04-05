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

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as ThemeType;
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme);
      document.documentElement.classList.toggle('dark', theme === 'dark');
      document.documentElement.classList.toggle('light', theme === 'light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const themeObject = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={themeObject}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeWrapper;
