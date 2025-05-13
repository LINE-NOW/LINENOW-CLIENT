import { css } from "@emotion/react";

export const global = (maxWidth: string, isAdmin: boolean = false) => css`
  ${resetCSS}

  body {
    width: 100vw;
    display: flex;
    justify-content: center;
    background-color: ${isAdmin ? "#333740" : ""};
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
    color: inherit;
  }

  button {
    outline: none;
    border: none;
    background-color: transparent;
  }
`;
