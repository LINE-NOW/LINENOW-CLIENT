import type { Meta, StoryObj } from "@storybook/react";
import ButtonLayout from "./ButtonLayout";
import Button from "../button/Button";

const meta = {
  title: "Molecules/ButtonLayout",
  component: ButtonLayout,
  parameters: {
    layout: "centered",
    componentSubtitle: "버튼이 2개이상 존재할때 레이아웃 형식을 정의합니다.",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      table: { disable: true },
    },
    colCount: {
      description: "버튼을 정리하기위한 열 개수",
      table: { defaultValue: { summary: "1" } },
    },
    colTemplate: {
      table: {
        defaultValue: { summary: "1", detail: "refeat(${colCount},1fr)" },
      },
    },
    rowGap: {
      table: { defaultValue: { summary: "0.5rem" } },
    },
    colGap: {
      table: { defaultValue: { summary: "0.5rem" } },
    },
  },
} satisfies Meta<typeof ButtonLayout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Col1ButtonLayout: Story = {
  args: {
    children: (
      <Button width="330px" key={1}>
        버튼
      </Button>
    ),
  },
};

export const Col1_1ButtonLayout: Story = {
  args: {
    children: [
      <Button width="330px" key={1}>
        버튼
      </Button>,
      <Button width="330px" variant="outline" key={2}>
        버튼
      </Button>,
    ],
  },
};

export const Row1_1ButtonLayout: Story = {
  args: {
    colCount: 2,
    children: [
      <Button width="150px" variant="outline" key={1}>
        버튼
      </Button>,
      <Button width="150px" key={2}>
        버튼
      </Button>,
    ],
  },
};

export const Row1_2ButtonLayout: Story = {
  args: {
    colCount: 2,
    colTemplate: "100px 200px",
    children: [
      <Button width="100px" variant="outline" key={1}>
        버튼
      </Button>,
      <Button width="200px" key={2}>
        버튼
      </Button>,
    ],
  },
};
