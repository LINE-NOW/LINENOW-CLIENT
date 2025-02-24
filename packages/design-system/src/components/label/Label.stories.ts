import { Meta, StoryObj } from "@storybook/react";
import Label from "./Label";
import { FontList } from "../../styles/fonts";
import { FontColorList } from "../../styles/theme";

const meta: Meta<typeof Label> = {
  title: "Atoms/Label",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  component: Label,
  argTypes: {
    children: {
      table: {
        type: {
          summary: "ReactNode",
        },
      },
    },
    font: {
      table: {
        type: { summary: "FontKey" },
        defaultValue: { summary: "body1" },
      },
      control: { type: "select" },
      options: FontList,
    },
    color: {
      table: {
        type: { summary: "FontColorKey" },
      },
      control: { type: "select" },
      options: FontColorList,
    },
    as: {
      table: {
        disable: true,
      },
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
