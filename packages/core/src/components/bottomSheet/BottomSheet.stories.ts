import { Meta, StoryObj } from "@storybook/react/*";
import BottomSheet from "./BottomSheet";

const meta: Meta<typeof BottomSheet> = {
  title: "Organism/BottomSheet",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  component: BottomSheet,
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof BottomSheet>;

export const EnterBottomSheet: Story = {
  args: { children: "바텀시트입니다." },
};
