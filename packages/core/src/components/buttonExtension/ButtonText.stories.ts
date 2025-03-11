import { Meta, StoryObj } from "@storybook/react";
import { TextButton } from "./ButtonExtension";

const meta: Meta<typeof TextButton> = {
  title: "Atoms/TextButton",
  component: TextButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      table: { type: { summary: "ReactNode" } },
    },
  },
};

export default meta;

type Story = StoryObj<typeof TextButton>;

export const Default: Story = {
  args: {
    children: "대기 줄 서기",
  },
};
