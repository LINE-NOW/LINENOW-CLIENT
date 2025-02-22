import "@emotion/react";
import { CustomTheme } from "./theme";

declare module "@emotion/react" {
  export interface Theme extends CustomTheme {}
}
