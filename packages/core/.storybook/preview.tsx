import type { Preview } from "@storybook/react";
import React from "react";

import LinenowProvider from "../src/components/themeProvider/LinenowProvider";
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;

export const decorators = [
  (Story) => (
    <LinenowProvider>
      <Story />
    </LinenowProvider>
  ),
];
