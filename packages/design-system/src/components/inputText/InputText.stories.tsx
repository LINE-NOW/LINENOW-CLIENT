import type { Meta, StoryObj } from "@storybook/react";
import InputText from "./InputText";
import InputPassword from "./InputPassword";

const meta = {
  title: "Components/InputText", // 같은 섹션에 보여줄 타이틀
  component: InputText,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"], // 자동 문서 생성
} satisfies Meta<typeof InputText>;

export default meta;

type Story = StoryObj<typeof meta>;

// InputText의 기본 스토리
export const Default: Story = {
  args: {
    width: "22rem",
    label: "Text Input",
    placeholder: "Enter text",
  },
};

// InputPassword의 스토리 추가
export const Password: Story = {
  render: (args) => <InputPassword {...args} />, // InputPassword를 렌더링
  args: {
    width: "22rem",
    label: "Password",
    placeholder: "Enter your password",
  },
};
