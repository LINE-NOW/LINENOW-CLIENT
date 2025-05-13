import { Global, ThemeProvider } from "@emotion/react";

// styles
import { global } from "../../styles/global";
import { theme } from "../../styles/theme";

interface LinenowProviderProps extends React.PropsWithChildren {
  maxWidth?: string;
  isAdmin?: boolean;
}

const LinenowProvider = (props: LinenowProviderProps) => {
  const { maxWidth = "none", isAdmin = false, children } = props;

  return (
    <ThemeProvider theme={theme(maxWidth)}>
      <Global styles={global(maxWidth, isAdmin)} />
      {children}
    </ThemeProvider>
  );
};

export default LinenowProvider;
