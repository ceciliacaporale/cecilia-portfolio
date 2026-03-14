import type { Meta, StoryObj } from "@storybook/react";
import SocialMedia from "./SocialMedia";
import { FaGithubAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const meta = {
  title: "Componentes/SocialMedia",
  component: SocialMedia,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  decorators: [
  (Story) => (
    <div style={{ position: "relative", padding: "20px" }}>
      <Story />
    </div>
  ),
],
} satisfies Meta<typeof SocialMedia>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { isDraggable: false },
};

export const SemSmile: Story = {
  args: { isDraggable: false, showSmile: false },
};

export const IconesGrandes: Story = {
  args: { isDraggable: false, iconSize: 40, showSmile: false },
};

export const CustomItems: Story = {
  args: {
    isDraggable: false,
    showSmile: false,
    items: [
      { id: "github", icon: FaGithubAlt,    label: "GitHub", url: "#", colorKey: "purple" },
      { id: "email",  icon: MdOutlineEmail, label: "E-mail", url: "#", colorKey: "lime"   },
    ],
  },
};