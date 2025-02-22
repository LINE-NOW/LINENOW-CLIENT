import { css } from "@emotion/react";

export const global = css({
  "*": {
    padding: 0,
    margin: 0,
    boxSizing: "border-box",
  },

  "ul, ol, li": {
    listStyle: "none",
  },

  "html, body": {
    fontFamily: `system-ui, -apple-system, BlinkMacSystemFont, 'Open Sans', 'Helvetica Neue'`,
  },

  a: {
    textDecoration: "none",
  },

  input: {
    border: "none",
    outline: "none",
  },
  button: {
    border: "none",
    outline: "none",
    backgroundColor: "transparent",
  },
});
