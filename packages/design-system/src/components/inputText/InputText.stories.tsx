import type { Meta, StoryObj } from "@storybook/react";
import InputText from "./InputText";
import InputPassword from "./InputPassword";

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
    label: {
      description: "input의 상단 라벨의 text를 지정합니다.",
    },
    placeholder: {
      description: "input의 placeholder을 지정합니다",
    },
    errorMessage: {
      description: "input의 error가 있는 경우, error text를 지정합니다",
    },
    rightIconButton: { table: { disable: true } },
  },
} satisfies Meta<typeof InputText>;

export default meta;

type Story = StoryObj<typeof meta>;

// InputText의 기본 스토리
export const Default: Story = {
  args: {
    width: "300px",
    label: "Text Input",
    placeholder: "Enter text",
  },
};

// InputText의 기본 스토리
export const NoneTitleInput: Story = {
  args: {
    width: "300px",
    placeholder: "Enter text",
  },
};

// InputPassword의 스토리 추가
export const PasswordInput: Story = {
  render: (args) => <InputPassword {...args} />, // InputPassword를 렌더링
  args: {
    width: "300px",
    label: "비밀번호",
    placeholder: "비밀번호를 입력해주세요.",
  },
};
