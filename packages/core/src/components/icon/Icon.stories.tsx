import type { Meta, StoryObj } from "@storybook/react";

import Icon from "./Icon";
import { IconKey, IconList } from "./icons";
import { IconsColorList } from "../../styles/theme";

const meta = {
  title: "Assets/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    icon: {
      control: { type: "select" },
      options: IconList,
    },

    color: {
      table: {
        type: {
          summary: "IconColorKey",
          detail: "white\nblue\ngray\ngrayLight",
        },
      },
      control: { type: "color" },
      options: IconsColorList,
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

// InputText의 기본 스토리
export const DefaultIcon: Story = {
  args: { icon: "check", color: "blue", size: 24 },
};

export const Icons: Story = {
  render: (args) => {
    return (
      <div>
        {IconList.map((icon, index) => (
          <Icon key={index} icon={icon as IconKey} color="gray" size={24} />
        ))}
      </div>
    );
  },
  args: { icon: "check", color: "gray", size: 24 },
};
