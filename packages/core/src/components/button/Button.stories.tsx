import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      table: {
        type: {
          summary: "Variant",
          detail: "blue\nlime\nblueLight\nlimeLight\noutline",
        },
      },
      control: { type: "select" },
      options: ["blue", "lime", "blueLight", "limeLight", "outline"],
    },
    size: {
      table: {
        type: {
          summary: "ButtonSize",
        },
      },
      control: { type: "inline-radio" },
      options: ["medium", "large"],
    },
    children: {
      table: { type: { summary: "ReactNode" } },
    },
    disabled: {
      control: { type: "inline-radio" },
      options: [true, false],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    variant: "blue",
    size: "large",
    width: "300px",
    children: "대기 줄 서기",
    disabled: false,
  },
};

export const TimerButton: Story = {
  args: {
    variant: "lime",
    size: "large",
    width: "300px",
    children: [
      <span key={"1"}>입장 확정하기</span>,
      <span key={"2"}>3:00</span>,
    ],
  },
};
