// router
import { RouterProvider } from "react-router-dom";
import router from "@routes/router";

// react-query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

//components
import { LinenowProvider } from "@linenow/core/components";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {/* <TestTool /> */}
      <LinenowProvider maxWidth="540px">
        <RouterProvider router={router} />
      </LinenowProvider>
    </QueryClientProvider>
  );
}

export default App;
