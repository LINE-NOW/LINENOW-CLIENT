import { css } from "@emotion/react";

export type FontStyle = typeof fonts;
export type FontStyleKey = keyof FontStyle;

const fontGenerator = (
  size: string,
  weight: number,
  lineHeight: string,
  letterSpacing?: string,
  fontFamily?: string
) => css`
  font-family: ${fontFamily ? `${fontFamily};` : "Apple SD Gothic Neo"};
  font-size: ${size};
  font-weight: ${weight};
  line-height: ${lineHeight};
  ${letterSpacing ? `letter-spacing: ${letterSpacing};` : ""}
`;

export const fonts = {
  // head
  head1: fontGenerator("1.5rem", 600, "2rem", "-0.24px"),
  head1_b: fontGenerator("1.25rem", 700, "1.5rem", "-0.24px"),
  head2: fontGenerator("1.25rem", 600, "1.5rem", "-0.1px"),
  head2_b: fontGenerator("1.25rem", 700, "1.5rem", "-0.1px"),
  head3: fontGenerator("1rem", 600, "1.25rem", "-0.16px"),
  head3_b: fontGenerator("1rem", 700, "1.25rem", "-0.16px"),

  // body
  body1: fontGenerator("1rem", 500, "1.5rem", "-0.25px"),
  body1_b: fontGenerator("1.25rem", 600, "1.5rem", "-0.5px"),
  body2: fontGenerator("0.875rem", 500, "1.25rem", "-0.25px"),
  body2_b: fontGenerator("0.875rem", 600, "1.25rem", "-0.5px"),
  body3: fontGenerator("0.75rem", 500, "1rem"),
  body3_b: fontGenerator("0.75rem", 600, "1rem"),

  // button
  button1: fontGenerator("1rem", 700, "1.5rem", "-0.2px"),
  button2: fontGenerator("0.75rem", 700, "1rem", "-0.05px"),

  // etc
  caption: fontGenerator("0.625rem", 500, "0.875rem"),
};
