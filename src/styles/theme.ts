
import type { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  colors: {
    lime: '#94EE9C',
    pink: '#FE87A4',
    pink10: '#fc41ae',
    pinkLight: '#FFD6E3',
    orange: '#FAC951',
    yellow: '#FFF982',
    yellowLight: '#FFF3B8',
    blue: '#1CBFC1',
    blueLight: '#BEEFEF',
    purple: '#8C75F7',
    black: '#000',
    white: '#fff',
    whiteDark: '#fff',
    keyActive: '#edebeb',
    borderColor: '#000',
  },
};

export const darkTheme: DefaultTheme = {
  colors: {
    lime: '#b3f2b8',
    pink: '#FE87A4',
    pink10: '#D7738C',
    pinkLight: '#FFD6E3',
    orange: '#DEBD6F',
    yellow: '#FFE7B3',
    yellowLight: '#FFF3B8',
    purple: '#C9BDF9',
    blue: '#79A0AC',
    blueLight: '#BEEFEF',
    black: '#fff',
    white: '#313131',
    whiteDark: '#4f4f4f',
    keyActive: '#4a4a4a',
    borderColor: '#000',
  },
};

export type ColorKey = keyof typeof lightTheme.colors;
