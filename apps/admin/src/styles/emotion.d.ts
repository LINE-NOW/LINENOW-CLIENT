import "@emotion/react";
import { CustomTheme } from "@linenow/design-system";

declare module "@emotion/react" {
  export interface Theme extends CustomTheme {}
}
