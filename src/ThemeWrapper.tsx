import React, { createContext, useContext, useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';

type ThemeType = 'light' | 'dark';

export const WALLPAPER_KEYS = ['pink', 'lime', 'orange', 'yellow', 'blue', 'purple'] as const;
export type WallpaperKey = (typeof WALLPAPER_KEYS)[number];

const isWallpaperKey = (value: string | null): value is WallpaperKey =>
  !!value && (WALLPAPER_KEYS as readonly string[]).includes(value);

// Dark mode keeps the same near-black base as the default dark wallpaper,
// just lightly tinted per color so the grid dots stay visible.
const DARK_WALLPAPER: Record<WallpaperKey, string> = {
  pink: '#211318',
  lime: '#101d15',
  orange: '#20180f',
  yellow: '#1e1c10',
  blue: '#101d20',
  purple: '#191526',
};

const resolveWallpaper = (key: WallpaperKey, mode: ThemeType) =>
  mode === 'dark' ? DARK_WALLPAPER[key] : lightTheme.colors[key];

interface Props {
  children: React.ReactNode;
  initialTheme?: ThemeType;
}

interface ThemeContextProps {
  theme: ThemeType;
  toggleTheme: () => void;
  wallpaper: WallpaperKey | null;
  setWallpaper: (color: WallpaperKey | null) => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: 'light',
  toggleTheme: () => {},
  wallpaper: null,
  setWallpaper: () => {},
});

export const useTheme = () => useContext(ThemeContext);

const ThemeWrapper: React.FC<Props> = ({ children, initialTheme }) => {
  const [theme, setTheme] = useState<ThemeType>('light');
  const [wallpaper, setWallpaperState] = useState<WallpaperKey | null>(null);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const resolved = initialTheme
      ?? (localStorage.getItem('theme') as ThemeType | null)
      ?? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

    setTheme(resolved);

    const storedWallpaper = localStorage.getItem('wallpaperColor');
    setWallpaperState(isWallpaperKey(storedWallpaper) ? storedWallpaper : null);

    setIsHydrated(true);
  }, [initialTheme]);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.classList.toggle('light', theme === 'light');
  }, [theme]);

  useEffect(() => {
    if (wallpaper) {
      document.documentElement.style.setProperty('--color-background', resolveWallpaper(wallpaper, theme));
    } else {
      document.documentElement.style.removeProperty('--color-background');
    }
  }, [wallpaper, theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const setWallpaper = (color: WallpaperKey | null) => {
    setWallpaperState(color);
    if (color) {
      localStorage.setItem('wallpaperColor', color);
    } else {
      localStorage.removeItem('wallpaperColor');
    }
  };

  if (!isHydrated) return null;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, wallpaper, setWallpaper }}>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeWrapper;