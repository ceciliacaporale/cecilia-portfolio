import type { Meta, StoryObj } from "@storybook/react";
import DisplayCard from "./DisplayCard";

const meta = {
  title: "Componentes/DisplayCard",
  component: DisplayCard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },

  argTypes: {
   title: {
      control: "text",
    },
    description: {
      control: "text",
    },
    imageSrc: {
      control: "text",
    },
    technologies: {
      control: "object",
    },
    link: {
      control: "text",
    },
  },
} satisfies Meta<typeof DisplayCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Construção",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageSrc: "/../../src/assets/imagem-em-construcao.png",
    technologies: ["React", "TypeScript", "Astro"],
    link: "https://example.com",
},
};

