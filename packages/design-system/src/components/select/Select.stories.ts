import { Meta, StoryObj } from "@storybook/react";
import Select from "./Select";
import { BackgroundColorList } from "../../styles/theme";

const meta: Meta<typeof Select> = {
  title: "Atoms/Select",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  component: Select,
  argTypes: {
    defaultValue: {
      table: {
        defaultValue: {
          summary: "options[0]",
          detail: "option 배열의 첫번째 값",
        },
      },
    },
    options: {
      table: {
        type: {
          summary: "OptionProps[]",
          detail: "label:보이는 값\nvalue:실제 값",
        },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Select>;

export const DefaultSelect: Story = {
  args: {
    defaultValue: "service",
    options: [
      {
        label: "관리자",
        value: "admin",
      },
      {
        label: "사용자",
        value: "service",
      },
    ],
  },
};
