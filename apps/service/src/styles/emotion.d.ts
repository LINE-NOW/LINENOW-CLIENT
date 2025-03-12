import "@emotion/react";
import { CustomTheme } from "@linenow/core/styles";

declare module "@emotion/react" {
  export interface Theme extends CustomTheme {}
}
