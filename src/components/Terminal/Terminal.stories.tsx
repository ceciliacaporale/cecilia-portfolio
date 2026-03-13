import type { Meta, StoryObj } from "@storybook/react";
import Terminal from "./Terminal";

const meta = {
  title: "Componentes/Terminal",
  component: Terminal,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },

  argTypes: {
    isDraggable: {
      control: "boolean",
    },

    showStar: {
      control: "boolean",
    },

    typingSpeed: {
      control: {
        type: "range",
        min: 10,
        max: 200,
        step: 10,
      },
    },

    messages: {
      control: "object",
    },
  },
} satisfies Meta<typeof Terminal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isDraggable: false,
  },
};

