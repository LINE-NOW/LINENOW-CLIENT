import type { Meta, StoryObj } from "@storybook/react";
import Chip from "./Chip";

const meta = {
  title: "Components/Chip",
  component: Chip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"], // 자동 문서 생성
} satisfies Meta<typeof Chip>;

export default meta;

type Story = StoryObj<typeof meta>;

// 기본 버튼 스토리
export const Blue: Story = {
  args: {
    children: "chip",
    variant: "blue",
  },
};
