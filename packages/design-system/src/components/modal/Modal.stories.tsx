import { Meta, StoryObj } from "@storybook/react/*";
import Modal from "./Modal";

const meta: Meta<typeof Modal> = {
  title: "Molecules/Modal",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  component: Modal,
  argTypes: {
    isOpen: { table: { disable: true } },
    title: { control: "text" },
    sub: { control: "text" },
    primaryButton: {
      table: { type: { summary: "ButtonProps" } },
      control: "object",
      description: "우측 버튼(중요도가 높음)에 대한 속성입니다.",
    },
    secondButton: {
      table: { type: { summary: "ButtonProps", detail: "variant:`outline`" } },
      control: "object",
      description: "좌측 버튼(중요도가 낮음)에 대한 속성입니다.",
    },
  },
};
export default meta;

type Story = StoryObj<typeof Modal>;

export const EnterModal: Story = {
  render: (args) => (
    <div className="mobile">
      <Modal {...args} />
    </div>
  ),
  args: {
    isOpen: true,
    title: "다른 대기가 취소돼요",
    sub: "입장을 확정하면 다른 대기는 취소돼요.\n입장을 확정하시겠어요?",
    primaryButton: {
      variant: "lime",
      children: "입장 확정하기",
      onClick: () => {
        alert("입장이 확정되었습니다!");
      },
    },
    secondButton: {
      children: "취소하기",
      onClick: () => {
        alert("입장이 취소되었습니다!");
      },
    },
  },
};

export const TabletModal: Story = {
  render: (args) => (
    <div className="tablet">
      <Modal {...args} />
    </div>
  ),
  args: {
    isOpen: true,
    title: "부스 대기 운영을 시작하시겠습니까?",
    sub: "운영을 시작하면 손님들의 라인나우 온라인 대기가 활성화됩니다.\n부스 대기 운영을 시작하시겠습니까?",
    primaryButton: {
      variant: "lime",
      children: "운영 시작하기",
      onClick: () => {
        alert("운영이 시작되었습니다!");
      },
    },
    secondButton: {
      children: "취소하기",
      onClick: () => {
        alert("운영이 취소되었습니다!");
      },
    },
  },
};
