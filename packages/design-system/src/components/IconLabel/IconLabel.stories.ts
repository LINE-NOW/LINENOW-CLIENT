import type { Meta, StoryObj } from "@storybook/react";
import IconLabel from "./IconLabel";

const meta = {
  title: "Components/IconLabel",
  component: IconLabel,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    font: {
      control: { type: "radio" },
      options: [
        "head1",
        "head1_b",
        "head2",
        "head2_b",
        "head3",
        "head3_b",
        "body1",
        "body1_b",
        "body2",
        "body2_b",
        "body3",
        "body3_b",
        "button1",
        "button2",
        "caption",
      ],
    },
    color: {
      control: { type: "radio" },
      options: [
        "white",
        "blue",
        "lime",
        "black",
        "blackLight",
        "gray",
        "grayLight",
      ],
    },
  },
} satisfies Meta<typeof IconLabel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LargeDefault: Story = {
  args: {
    font: "body1",
    gap: "0.12rem",
    icon: { name: "right_gray", size: "1rem" },
    children: "hello",
  },
};
