import { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";

// components
import Toast from "./Toast";

const meta: Meta<typeof Toast> = {
  title: "Toast",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  component: Toast,
  argTypes: {
    position: {
      table: {
        type: {
          summary: "top|bottom",
        },
        defaultValue: {
          summary: "top",
        },
      },
    },
    duration: {
      table: {
        type: {
          detail: "second",
        },
        defaultValue: {
          summary: "3",
        },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Toast>;

export const DefaultToast: Story = {
  args: {
    children: "토스트 메세지를 입력해주세요!",
  },
};

export const TopToast: Story = {
  render: (args) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "400px",
          height: "300px",
          border: "solid 1px black",
        }}
      >
        {isVisible || (
          <button
            onClick={() => {
              setIsVisible(true);
            }}
          >
            토스트 메세지 보기
          </button>
        )}

        {isVisible && <Toast {...args} />}
      </div>
    );
  },
  args: {
    children: "토스트 메세지를 입력해주세요!",
    position: "top",
    duration: 3,
  },
};

export const BottomToast: Story = {
  render: (args) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "400px",
          height: "300px",
          border: "solid 1px black",
        }}
      >
        {isVisible || (
          <button
            onClick={() => {
              setIsVisible(true);
            }}
          >
            토스트 메세지 보기
          </button>
        )}

        {isVisible && <Toast {...args} />}
      </div>
    );
  },
  args: {
    children: "토스트 메세지를 입력해주세요!",
    position: "bottom",
    duration: 3,
  },
};
