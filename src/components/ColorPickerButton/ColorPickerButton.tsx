import React, { useEffect, useRef, useState } from 'react';
import { useTheme as useStyledTheme } from 'styled-components';
import { IoColorPaletteOutline, IoRefreshOutline } from 'react-icons/io5';
import { useTheme, WALLPAPER_KEYS, type WallpaperKey } from '../../ThemeWrapper';
import { ContainerToggle, ToggleButton, Palette, Swatch, ResetSwatch } from './ColorPickerButton.styles';

export interface ColorPickerButtonProps {
  iconSize?: number;
}

const WALLPAPER_LABELS: Record<WallpaperKey, string> = {
  pink: 'Rosa',
  lime: 'Lima',
  orange: 'Laranja',
  yellow: 'Amarelo',
  blue: 'Azul',
  purple: 'Roxo',
};

const ColorPickerButton = ({ iconSize = 19 }: ColorPickerButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const { wallpaper, setWallpaper } = useTheme();
  const styledTheme = useStyledTheme();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const pickColor = (color: WallpaperKey | null) => {
    setWallpaper(color);
    setIsOpen(false);
  };

  return (
    <ContainerToggle ref={wrapperRef}>
      <ToggleButton
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Personalizar cor do fundo"
        aria-expanded={isOpen}
        title="Personalizar cor do fundo"
      >
        <IoColorPaletteOutline size={iconSize} color="#000" />
      </ToggleButton>

      <Palette $open={isOpen} role="menu" aria-label="Cores de fundo">
        <ResetSwatch
          type="button"
          onClick={() => pickColor(null)}
          aria-label="Restaurar cor padrão do fundo"
          title="Cor padrão"
        >
          <IoRefreshOutline size={13} color="#000" />
        </ResetSwatch>
        {WALLPAPER_KEYS.map((key) => (
          <Swatch
            key={key}
            type="button"
            $color={styledTheme.colors[key]}
            $selected={wallpaper === key}
            onClick={() => pickColor(key)}
            aria-label={`Fundo ${WALLPAPER_LABELS[key]}`}
            title={WALLPAPER_LABELS[key]}
          />
        ))}
      </Palette>
    </ContainerToggle>
  );
};

export default ColorPickerButton;
