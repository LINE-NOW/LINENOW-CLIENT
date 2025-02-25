import { Meta, StoryObj } from "@storybook/react";
import Separator from "./Separator";
import { BackgroundColorList } from "../../styles/theme";

const meta: Meta<typeof Separator> = {
  title: "Atoms/Separator",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  component: Separator,
  argTypes: {
    width: {
      table: {
        defaultValue: { summary: "100%" },
      },
    },
    height: {
      table: {
        defaultValue: { summary: "4" },
      },
    },
    color: {
      description: "색을 지정합니다",
      control: "select",
      options: BackgroundColorList,
      table: {
        type: {
          summary: BackgroundColorList.join("|"),
        },
        defaultValue: {
          summary: "grayLight",
        },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Separator>;

export const DefaultSeparator: Story = {
  args: {
    width: "400px",
    height: 4,
    color: "grayLight",
  },
};
