import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      lime: string;
      pink: string;
      pink10: string;
      orange: string;
      yellow: string;
      blue: string;
      purple: string;
      black: string;
      white: string;
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
    size: {
      xxs: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
    borderRadius: {
      none: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
      full: string;
    };
  }
}
