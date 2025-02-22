import { Meta, StoryObj } from "@storybook/react";
import Label from "./Label";

const meta: Meta<typeof Label> = {
  title: "Components/Label",
  component: Label,
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
};

export default meta;

type Story = StoryObj<typeof Label>;

export const head1: Story = {
  args: {
    font: "head1",
    children: "라인나우 헤드",
  },
};

export const Body1: Story = {
  args: {
    font: "body1",
    children: "라인나우 본문 내용",
  },
};
