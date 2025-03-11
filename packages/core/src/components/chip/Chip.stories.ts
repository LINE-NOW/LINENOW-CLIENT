import type { Meta, StoryObj } from "@storybook/react";
import Chip from "./Chip";

const meta = {
  title: "Atoms/Chip",
  component: Chip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      table: { type: { summary: "ReactNode" } },
    },
    variant: {
      table: { type: { summary: "variant" } },
      control: { type: "select" },
    },
  },
} satisfies Meta<typeof Chip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BlueChip: Story = {
  args: {
    children: "chip",
    variant: "blue",
  },
};

export const GrayLightChip: Story = {
  args: {
    children: "chip",
    variant: "grayLight",
  },
};
export const OutlineChip: Story = {
  args: {
    children: "chip",
    variant: "outline",
  },
};
