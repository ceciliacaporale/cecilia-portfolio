import type { Meta, StoryObj } from "@storybook/react";
import Dots from "./Dots";

const meta = {
  title: "Componentes/Dots",
  component: Dots,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },

  argTypes: {
   colorKeys: {
      control: {
        type: "object",
      },
      options: ["pink", "orange", "lime", "blue", "purple"],
    },
    size: {
      control: {
        type: "select",
        options: ["sm", "md", "lg"],
      },
    },
  },
} satisfies Meta<typeof Dots>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    colorKeys: ["pink", "orange", "lime"],
    size: "md",
  },
};

