import type { Meta, StoryObj } from "@storybook/react";
import Skills from "./Skills";
import { FaReact, FaJs } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

const meta = {
  title: "Componentes/Skills",
  component: Skills,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    isDraggable: { control: "boolean" },
    skills: { control: "object", description: "Lista de skills com ícone, nome, favorito e cor" },
  },
} satisfies Meta<typeof Skills>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { isDraggable: false },
};

export const CustomSkills: Story = {
  args: {
    isDraggable: false,
    skills: [
      { icon: FaReact,      name: "React",      favorite: true,  colorKey: "blue"   },
      { icon: FaJs,         name: "JavaScript", favorite: true,  colorKey: "yellow" },
      { icon: SiTypescript, name: "TypeScript", favorite: false, colorKey: "purple" },
    ],
  },
};