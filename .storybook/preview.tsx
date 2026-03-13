import type { Preview } from '@storybook/react-vite';
import React from 'react';
import ThemeWrapper from '../src/ThemeWrapper'; 
import '../src/styles/global.css';

const preview: Preview = {
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
        { name: 'Branco', value: '#FFFFFF' },
        { name: 'Escuro (Projeto)', value: '#181718' }, 
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
  },
  
  decorators: [
    (Story) => (
      <ThemeWrapper initialTheme="light">
        <Story />
      </ThemeWrapper>
    ),
  ],
};

export default preview;