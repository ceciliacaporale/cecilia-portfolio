import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      lime: string;
      pink: string;
      pink10: string;
      pinkLight: string;
      orange: string;
      yellow: string;
      yellowLight: string;
      blue: string;
      blueLight: string;
      purple: string;
      black: string;
      white: string;
      whiteDark: string;
      keyActive: string;
      borderColor: string;
      darkMode?: {
        background: string;
        borderColor: string;
        limeDark: string;
        purpleDark: string;
        pinkDark: string;
        orangeDark: string;
        yellowDark: string;
        blueDark: string;
        text: string;
        backgroundWindow: string;
        primary: string;
        secondary: string;
        accent: string;
        surface: string;
        border: string;
      };
    };
  }
}
