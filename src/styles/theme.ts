
import type { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  colors: {
    lime: '#94EE9C',
    pink: '#FE87A4',
    pink10: '#fc41ae',
    orange: '#FAC951',
    yellow: '#FFF982',
    blue: '#1CBFC1',
    purple: '#8C75F7',
    black: '#000',
    white: '#fff',
    borderColor: '#000',
    darkMode: {} as any
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

export const darkTheme: DefaultTheme = {
  colors: {
    lime: '#6FA994',
    pink: '#FE87A4',
    pink10: '#D7738C',
    orange: '#D7B054',
    yellow: '#E4C789',
    purple: '#C9BDF9',
    blue: '#79A0AC',
    black: '#fff',
    white: '#313131',
    borderColor: '#000',
  },
  size: lightTheme.size,
  borderRadius: lightTheme.borderRadius,
};
