// router
import { RouterProvider } from "react-router-dom";
import router from "@routes/router";

// react-query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

//components
import FullSpinner from "@components/spinner/FullSpinner";
import { LinenowProvider } from "@linenow/design-system";

// Test

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {/* <TestTool /> */}
      <LinenowProvider>
        <FullSpinner />
        <RouterProvider router={router} />
      </LinenowProvider>
    </QueryClientProvider>
  );
}

export default App;
