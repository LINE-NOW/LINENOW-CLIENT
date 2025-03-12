import { Meta, StoryObj } from "@storybook/react";
import Switch from "./Switch";
import { IconList } from "../icon/icons";

const meta: Meta<typeof Switch> = {
  title: "Atoms/Switch",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  component: Switch,
  argTypes: {
    icon: {
      description: "좌측 아이콘을 설정합니다.",
      control: { type: "select" },
      table: {
        type: {
          summary: "IconKey",
        },
      },
      options: IconList,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const DefaultSwitch: Story = {
  args: {
    icon: "map",
    children: "지도 보기",
  },
};
