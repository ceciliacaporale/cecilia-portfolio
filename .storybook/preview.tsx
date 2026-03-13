import type { Preview } from '@storybook/react-vite';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../src/styles/theme';
import '../src/styles/global.css';

const preview: Preview = {
  globalTypes: {
    theme: {
      name: 'Tema',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        items: [
          { value: 'light', title: '☀️ Light' },
          { value: 'dark',  title: '🌙 Dark'  },
        ],
        dynamicTitle: true,
      },
    },
  },
  parameters: {
    options: {
      storySort: {
        order: ['Apresentação', 'Componentes'],
      },
    },
    backgrounds: {
      default: 'Claro (Projeto)',
      values: [
        { name: 'Claro (Projeto)', value: '#FCE6CA' },
        { name: 'Branco',          value: '#FFFFFF'  },
        { name: 'Escuro (Projeto)',value: '#181718'  },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: { test: 'todo' },
  },

  decorators: [
    (Story, context) => {
      const isDark = context.globals.theme === 'dark';
      const theme  = isDark ? darkTheme : lightTheme;

      return (
        <ThemeProvider theme={theme}>
          <Story />
        </ThemeProvider>
      );
    },
  ],
};

export default preview;