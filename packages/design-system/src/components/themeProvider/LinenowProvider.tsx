import { PropsWithChildren } from "react";
import { Global, ThemeProvider } from "@emotion/react";

// styles
import { global } from "../../styles/global";
import { theme } from "../../styles/theme";

interface LinenowProviderProps extends PropsWithChildren {}

const LinenowProvider = ({ children }: LinenowProviderProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={global} />
      {children}
    </ThemeProvider>
  );
};

export default LinenowProvider;
