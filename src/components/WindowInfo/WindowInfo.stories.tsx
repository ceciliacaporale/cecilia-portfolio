import type { Meta, StoryObj } from "@storybook/react";
import WindowInfo from "./WindowInfo";

const meta = {
  title: "Componentes/WindowInfo",
  component: WindowInfo,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },

  argTypes: {
    showStar: {
      control: "boolean",
    },
    title: {
      control: "text",
    },
    text: {
      control: "text",
    },
    headerColor: {
      control: "color",
    },
    backgroundColor: {
      control: "color",
    },
    borderColor: {
      control: "color",
    },
    width: {
      control: "number",
    },
    height: {
      control: "number",
    },
  },
} satisfies Meta<typeof WindowInfo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isDraggable: false,
  },
};

