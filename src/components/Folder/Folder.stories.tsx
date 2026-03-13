import type { Meta, StoryObj } from "@storybook/react";
import Folder from "./Folder";

const meta = {
  title: "Componentes/Folder",
  component: Folder,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    isDraggable: { control: "boolean" },
    href:        { control: "text" },
    tooltipText: { control: "text" },
    showStar:    { control: "boolean" },
  },
} satisfies Meta<typeof Folder>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { isDraggable: false },
};

export const NoStar: Story = {
  args: { isDraggable: false, showStar: false },
};

export const CustomTooltip: Story = {
  args: { isDraggable: false, tooltipText: "Projetos", href: "/projects" },
};