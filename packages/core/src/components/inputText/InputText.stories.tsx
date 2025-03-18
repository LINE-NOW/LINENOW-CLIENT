import type { Meta, StoryObj } from "@storybook/react";
import InputText from "./InputText";

const meta = {
  title: "Molecules/InputText",
  component: InputText,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    width: {
      table: { defaultValue: { summary: "100%" } },
    },
    placeholder: {
      description: "input의 placeholder을 지정합니다",
    },
  },
} satisfies Meta<typeof InputText>;

export default meta;

type Story = StoryObj<typeof meta>;

// InputText의 기본 스토리
export const Default: Story = {
  args: {
    width: "300px",
  },
};

// InputText의 기본 스토리
export const NoneTitleInput: Story = {
  args: {
    width: "300px",
  },
};
