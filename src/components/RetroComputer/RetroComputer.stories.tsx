import type { Meta, StoryObj } from "@storybook/react";
import RetroComputer from "./RetroComputer";

const meta = {
  title: "Componentes/RetroComputer",
  component: RetroComputer,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    isDraggable: {
      control: "boolean",
    },
    typingSpeed: {
      control: { type: "range", min: 10, max: 300, step: 10 },
      description: "Velocidade da animação em ms por caractere",
    },
    lines: {
      control: "object",
      description: "Linhas de texto exibidas no monitor",
    },
  },
} satisfies Meta<typeof RetroComputer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { isDraggable: false },
};

export const Fast: Story = {
  args: {
    isDraggable: false,
    typingSpeed: 20,
  },
};

export const CustomContent: Story = {
  args: {
    isDraggable: false,
    typingSpeed: 50,
    lines: [
      "const stack = [",
      "  'React',",
      "  'TypeScript',",
      "  'Astro',",
      "];",
    ],
  },
};