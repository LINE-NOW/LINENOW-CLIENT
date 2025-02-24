import type { Meta, StoryObj } from "@storybook/react";

import IconLabel from "./IconLabel";
import { IconList } from "../icon/icons";
import { FontList } from "../../styles/fonts";

const meta = {
  title: "Components/IconLabel",
  component: IconLabel,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    icon: {
      control: { type: "select" },
      table: {
        type: {
          summary: "IconKey",
        },
      },
      options: IconList,
    },
    iconProps: {
      description: `icon의 세부 설정을 지정합니다.`,
      table: {
        type: {
          summary: "Object",
          detail:
            "상세 설정은 Assets/Icon참고\ncolor:아이콘 컬러\nsize:아이콘 크기",
        },
      },
    },
    iconPosition: {
      description: `icon의 위치를 지정합니다.`,
      table: {
        type: {
          summary: "left|right",
        },
      },
      control: { type: "inline-radio" },
      options: ["left", "right"],
    },
    gap: {
      description: `icon과 text사이 간격을 지정합니다.`,
    },

    font: {
      table: {
        type: {
          summary: "FontKey",
        },
      },
      control: { type: "select" },
      options: FontList,
    },
    color: {
      description: `text의 색 지정`,
      table: {
        type: {
          summary: "FontColorKey",
        },
      },
    },
    children: {
      table: {
        type: {
          summary: "ReactNode",
        },
      },
    },
  },
} satisfies Meta<typeof IconLabel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LocationLabel: Story = {
  args: {
    icon: "location_pin",
    iconPosition: "left",
    iconProps: {
      color: "grayLight",
      size: 16,
    },
    gap: "2px",
    font: "body3",
    color: "gray",
    children: "동국대학교 팔정도",
  },
};

export const KakaoLabel: Story = {
  args: {
    icon: "kakao",
    iconPosition: "left",
    iconProps: {
      color: "#000000",
      size: 24,
    },
    gap: "8px",
    font: "button1",
    color: "black",
    children: "카카오톡 1:1 오픈채팅",
  },
};
