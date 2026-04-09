import type { Meta, StoryObj } from '@storybook/react';
import ThemeToggleButton from './ThemeToggleButton';

const meta = {
  title: 'Componentes/ThemeToggleButton',
  component: ThemeToggleButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    activeTheme: {
      control: 'radio',
      options: ['light', 'dark'],
      description: 'Força o estado do botão (ignora o contexto)',
    },
    iconSize: {
      control: { type: 'range', min: 16, max: 48, step: 2 },
      description: 'Tamanho do ícone em pixels',
    },
    onToggle: {
      action: 'toggled',
      description: 'Dispara a função de clique',
    }
  }
} satisfies Meta<typeof ThemeToggleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightMode: Story = {
  args: {
    activeTheme: 'light',
    iconSize: 20,
  },
};

export const DarkMode: Story = {
  args: {
    activeTheme: 'dark',
    iconSize: 24,
  },
};