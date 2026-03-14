import type { Meta, StoryObj } from "@storybook/react";
import Folder from "./Folder";

const meta = {
  title: "Componentes/Folder",
  component: Folder,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  decorators: [
    (Story) => (
      <div style={{ paddingTop: "60px", paddingBottom: "20px" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    href:        { control: "text" },
    tooltipText: { control: "text" },
    showStar:    { control: "boolean" },
  },
} satisfies Meta<typeof Folder>;

export default meta;

type Story = StoryObj<typeof Folder>;

export const Default: Story = {
  args: { isDraggable: false, standalone: true },
};

export const NoStar: Story = {
  args: { isDraggable: false, standalone: true, showStar: false },
};

export const CustomTooltip: Story = {
  args: { isDraggable: false, standalone: true, tooltipText: "Projetos", href: "/projects" },
};