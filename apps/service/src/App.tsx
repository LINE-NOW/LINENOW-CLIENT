// router
import { RouterProvider } from "react-router-dom";
import router from "@routes/router";

// react-query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

//components
import { LinenowProvider } from "@linenow/core/components";
import TestTool from "./mocks/_components/TestTool";
import { SplashProvider } from "@pages/waitingCheck/_components/splash/SplashContext";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {/* <TestTool /> */}
      <LinenowProvider maxWidth="540px">
        <SplashProvider>
          <RouterProvider router={router} />
        </SplashProvider>
      </LinenowProvider>
    </QueryClientProvider>
  );
}

export default App;
