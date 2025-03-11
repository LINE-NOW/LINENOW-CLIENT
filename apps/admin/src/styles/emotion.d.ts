import "@emotion/react";
import { CustomTheme } from "@linenow/core/src/styles";

declare module "@emotion/react" {
  export interface Theme extends CustomTheme {}
}
