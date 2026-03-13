import type { Meta, StoryObj } from "@storybook/react";
import MemoryStorage from "./MemoryStorage";
import { DEFAULT_CATEGORIES } from "../../data/memoryStorageData";

const meta = {
  title: "Componentes/MemoryStorage",
  component: MemoryStorage,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    isDraggable: { control: "boolean" },
    loadingDelay: {
      control: { type: "range", min: 0, max: 5000, step: 500 },
      description: "Delay da animação em ms",
    },
    title:           { control: "text" },
    storageLabel:    { control: "text" },
    storageFreeText: { control: "text" },
    categories:      { control: "object" },
  },
} satisfies Meta<typeof MemoryStorage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { isDraggable: false },
};

export const NoDelay: Story = {
  args: {
    isDraggable: false,
    loadingDelay: 0,
  },
};

export const CustomCategories: Story = {
  args: {
    isDraggable: false,
    loadingDelay: 0,
    storageLabel: "Dev Stack",
    storageFreeText: "sempre aprendendo",
    categories: [
      { name: "React",      percent: "40%", colorKey: "blue"   },
      { name: "TypeScript", percent: "30%", colorKey: "purple" },
      { name: "CSS",        percent: "20%", colorKey: "pink"   },
      { name: "outros",     percent: "10%", colorKey: "lime"   },
    ],
  },
};