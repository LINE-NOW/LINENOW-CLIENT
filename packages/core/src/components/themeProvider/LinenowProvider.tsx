import { Global, ThemeProvider } from "@emotion/react";

// styles
import { global } from "../../styles/global";
import { theme } from "../../styles/theme";

interface LinenowProviderProps extends React.PropsWithChildren {
  maxWidth?: string;
}

const LinenowProvider = (props: LinenowProviderProps) => {
  const { maxWidth = "none", children } = props;

  return (
    <ThemeProvider theme={theme(maxWidth)}>
      <Global styles={global(maxWidth)} />
      {children}
    </ThemeProvider>
  );
};

export default LinenowProvider;
