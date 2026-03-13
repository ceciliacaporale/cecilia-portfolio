import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import React from "react";
import LoadingWindow from "./LoadingWindow";

const meta = {
  title: "Componentes/LoadingWindow",
  component: LoadingWindow,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    isVisible:      { control: "boolean" },
    skipDelay:      { control: "boolean", description: "Pula o delay — usar sempre true no Storybook" },
    title:          { control: "text" },
    showStar:       { control: "boolean" },
    shapeSize:      { control: { type: "range", min: 16, max: 60, step: 4 } },
    delay:          { control: { type: "range", min: 0, max: 8000, step: 500 }, description: "Delay em ms (ignorado se skipDelay=true)" },
    headerColorKey: {
      control: "select",
      options: ["orange", "pink", "lime", "blue", "yellow", "purple", "pink10"],
    },
    onClose: { action: "fechou" },
  },
} satisfies Meta<typeof LoadingWindow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isVisible: true,
    skipDelay: true,
    onClose:        () => {},

  },
};

export const CustomHeader: Story = {
  args: {
    isVisible:      true,
    skipDelay:      true,
    title:          "loading skills...",
    headerColorKey: "purple",
    onClose:        () => {},
  },
};

export const NoStar: Story = {
  args: {
    isVisible: true,
    skipDelay: true,
    showStar:  false,
    onClose:        () => {},

  },
};

export const Interativa: Story = {
  render: (args) => {
    const [visible, setVisible] = useState(true);
    return (
      <div style={{ position: "relative", width: 300, height: 150, display: "flex", alignItems: "center", justifyContent: "center" }}>
        {!visible && (
          <button onClick={() => setVisible(true)} style={{ fontFamily: "Pixelify Sans", cursor: "pointer" }}>
            Abrir janela
          </button>
        )}
        <LoadingWindow
          {...args}
          isVisible={visible}
          skipDelay={true}
          onClose={() => setVisible(false)}
        />
      </div>
    );
  },
  args: {
    isVisible:      true,
    skipDelay:      true,
    title:          "constant evolution",
    headerColorKey: "orange",
    showStar:       true,
    onClose:        () => {},
  },
};