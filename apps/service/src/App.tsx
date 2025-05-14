// router
import { RouterProvider } from "react-router-dom";
import router from "@routes/router";

// react-query
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

//components
import { LinenowProvider } from "@linenow/core/components";
import { SplashProvider } from "@pages/waitingCheck/_components/splash/SplashContext";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {/* <TestTool /> */}
      <ReactQueryDevtools initialIsOpen={true} />
      <LinenowProvider maxWidth="540px">
        <SplashProvider>
          <RouterProvider router={router} />
        </SplashProvider>
      </LinenowProvider>
    </QueryClientProvider>
  );
}

export default App;
