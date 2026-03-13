import type { Meta, StoryObj } from '@storybook/react';
import ThemeToggleButton from './ThemeToggleButton';

const meta = {
  title: 'Componentes/ThemeToggleButton',
  component: ThemeToggleButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  // Configurando os controles que vão aparecer na tela do Storybook
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

// Variação 1: Como o botão fica no modo claro
export const LightMode: Story = {
  args: {
    activeTheme: 'light',
    iconSize: 20,
  },
};

// Variação 2: Como o botão fica no modo escuro
export const DarkMode: Story = {
  args: {
    activeTheme: 'dark',
    iconSize: 24, // Exemplo passando um tamanho diferente
  },
};