import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["blue", "lime", "blueLight", "limeLight", "outline"],
    },
    size: {
      control: { type: "radio" },
      options: ["medium", "large"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const BlueLarge: Story = {
  args: {
    variant: "blue",
    size: "large",
    children: "파랑 버튼",
  },
};

export const LimeLarge: Story = {
  args: {
    variant: "lime",
    size: "large",
    children: "라임 버튼",
  },
};
