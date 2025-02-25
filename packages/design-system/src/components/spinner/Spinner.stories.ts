import { Meta, StoryObj } from "@storybook/react";
import Spinner from "./Spinner";
import { BorderColorList } from "../../styles/theme";

const meta: Meta<typeof Spinner> = {
  title: "Atoms/Spinner",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  component: Spinner,
  argTypes: {
    size: {
      description: "크기를 지정합니다.",
      table: {
        defaultValue: {
          summary: "48",
        },
      },
    },
    color: {
      description: "색을 지정합니다",
      control: "select",
      options: BorderColorList,
      table: {
        type: {
          summary: BorderColorList.join("|"),
        },
        defaultValue: {
          summary: "blue",
        },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Spinner>;

export const DefaultSpinner: Story = {
  args: {
    size: 48,
    color: "blue",
  },
};

export const GraySpinner: Story = {
  args: {
    size: 24,
    color: "gray",
  },
};
