import { type DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    lime: '#94EE9C',
    pink: '#FE87A4',
    pink10:'#FC41AE',
    orange: '#FAC951',
    yellow: '#FFF982',
    blue: '#1CBFC1',
    black: '#000',
    white: '#fff',

    darkMode: {
      background: '#181718',
      borderColor: '#353535',
      limeDark: '#6FA994',
      pinkDark: '#D9AAB0',
      orangeDark: '#DBBD79',
      yellowDark: '#E4C789',
      blueDark: '#79A0AC',
      text: '#ffff',
      backgroundWindow: '#c7c0c0',
      primary: '#BB86FC',
      secondary: '#03DAC6',
      accent: '#CF6679',
      surface: '#1E1E1E',
      border: '#333',
    },
  },

  size: {
    xxs: '0.25rem', // 4px
    xs: '0.375rem', // 6px
    sm: '0.5rem', // 8px
    md: '0.625rem', // 10px
    lg: '1rem', // 16px
    xl: '1.25rem', // 20px
    xxl: '1.5rem', // 24px
  },

  borderRadius: {
    none: '0',
    sm: '0.125rem', // 2px
    md: '0.25rem', // 4px
    lg: '0.5rem', // 8px
    xl: '0.625rem', // 10px
    xxl: '1rem', // 16px
    full: '9999px',
  },
};

export default theme;