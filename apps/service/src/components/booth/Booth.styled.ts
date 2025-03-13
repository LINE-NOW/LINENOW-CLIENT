import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const BoothThumbnailWrapper = styled.section`
  display: flex;
  gap: 0.5rem;
`;

export const getFlexStyle = (style: {
  width?: string;
  flexGrow?: 0 | 1;
  gap?: string;
  direction?: "column" | "row";
  alignItem?: "center" | "start" | "end";
  justifyContent?: "center" | "start" | "end";
  overflow?: "visible" | "hidden" | "scroll";
}) => {
  const {
    width = "auto",
    flexGrow = 0,
    gap = "0rem",
    direction = "row",
    alignItem = "start",
    justifyContent = "start",
    overflow = "hidden",
  } = style;
  return css`
    width: ${width};
    flex-grow: ${flexGrow};

    display: flex;
    flex-direction: ${direction};
    gap: ${gap};
    align-items: ${alignItem};
    justify-content: ${justifyContent};

    overflow: ${overflow};
  `;
};

export const getRowStyle = (grow: 0 | 1 = 0, width: string = "100%") => css`
  width: ${width};
  flex-grow: ${grow};
`;

export const getImageStyle = (size: string, borderRadius: string) => css`
  width: ${size};
  height: ${size};
  border-radius: ${borderRadius};
`;
