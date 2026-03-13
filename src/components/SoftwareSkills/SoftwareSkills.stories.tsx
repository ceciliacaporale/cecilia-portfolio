import type { Meta, StoryObj } from "@storybook/react";
import SoftwareSkills from "./SoftwareSkills";
import { SiTypescript, SiReact, SiNextdotjs } from "react-icons/si";

const meta = {
  title: "Componentes/SoftwareSkills",
  component: SoftwareSkills,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    isDraggable: { control: "boolean" },
    softwares:   { control: "object", description: "Lista de softwares com ícone, nome e cor" },
  },
} satisfies Meta<typeof SoftwareSkills>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { isDraggable: false },
};

export const TechStack: Story = {
  args: {
    isDraggable: false,
    softwares: [
      { icon: SiReact,      name: "React",      colorKey: "blue"   },
      { icon: SiTypescript, name: "TypeScript", colorKey: "purple" },
      { icon: SiNextdotjs,  name: "Next.js",    colorKey: "lime"   },
    ],
  },
};