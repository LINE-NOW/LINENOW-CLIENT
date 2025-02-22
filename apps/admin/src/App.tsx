// routers
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";

// react-query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import FullSpinner from "@components/spinner/FullSpinner";
import { LinenowProvider } from "@linenow/design-system";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <LinenowProvider>
        <FullSpinner />
        <RouterProvider router={router} />
      </LinenowProvider>
    </QueryClientProvider>
  );
}

export default App;
