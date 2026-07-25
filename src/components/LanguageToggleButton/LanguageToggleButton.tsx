import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from 'styled-components';
import { IoLanguageOutline } from 'react-icons/io5';
import { useLanguage } from '../../LanguageWrapper';
import { LANGUAGES, LANGUAGE_LABELS, LANGUAGE_NAMES, LANGUAGE_COLOR_KEYS, type Language } from '../../i18n/translations';
import { ContainerToggle, ToggleButton, Dropdown, Option, OptionDot, OptionCheck } from './LanguageToggleButton.styles';

const LanguageToggleButton = () => {
  const { language, setLanguage } = useLanguage();
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const pickLanguage = (lang: Language) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <ContainerToggle ref={wrapperRef}>
      <ToggleButton
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Translate this page / Traduzir página / Traducir página"
        aria-expanded={isOpen}
        title="Translate this page"
      >
        <IoLanguageOutline size={16} />
        {LANGUAGE_LABELS[language]}
      </ToggleButton>

      <Dropdown $open={isOpen} role="menu" aria-label="Languages">
        {LANGUAGES.map((lang) => (
          <Option
            key={lang}
            type="button"
            role="menuitem"
            $active={lang === language}
            $color={theme.colors[LANGUAGE_COLOR_KEYS[lang]]}
            onClick={() => pickLanguage(lang)}
          >
            <OptionDot $color={theme.colors[LANGUAGE_COLOR_KEYS[lang]]} />
            {LANGUAGE_NAMES[lang]}
            {lang === language && <OptionCheck>✓</OptionCheck>}
          </Option>
        ))}
      </Dropdown>
    </ContainerToggle>
  );
};

export default LanguageToggleButton;
