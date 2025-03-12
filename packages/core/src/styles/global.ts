import { css } from "@emotion/react";

export const global = (maxWidth: string) => css`
  ${resetCSS}

  body {
    width: 100vw;
    display: flex;
    justify-content: center;
  }

  #root {
    max-width: ${maxWidth};
    width: 100%;
  }
`;

const resetCSS = css`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  ul,
  ol,
  li {
    list-style: none;
  }

  html,
  body {
    font-family: "system-ui", "-apple-system", "BlinkMacSystemFont", "Open Sans",
      "Helvetica Neue";
  }

  a {
    text-decoration: none;
  }

  button {
    outline: none;
    border: none;
    background-color: transparent;
  }
`;
