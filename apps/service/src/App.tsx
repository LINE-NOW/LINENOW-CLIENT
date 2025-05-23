// router
import { RouterProvider } from "react-router-dom";

// react-query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

//components
import { LinenowProvider } from "@linenow/core/components";
import { SplashProvider } from "@pages/waitingCheck/_components/splash/SplashContext";
import { prodRouter, testRouter } from "@routes/router";

// import TestTool from "@components/test/TestTool";

function App() {
  const queryClient = new QueryClient();
  const prodDate = new Date(import.meta.env.VITE_PROD_DATE);
  const currentDate = new Date();
  const isBeforeTargetDate = () => currentDate < prodDate;
  const router = isBeforeTargetDate() ? testRouter : prodRouter;

  return (
    <QueryClientProvider client={queryClient}>
      {/* <TestTool /> */}
      {/* <ReactQueryDevtools initialIsOpen={true} /> */}
      <LinenowProvider maxWidth="540px">
        <SplashProvider>
          <RouterProvider router={router} />
        </SplashProvider>
      </LinenowProvider>
    </QueryClientProvider>
  );
}

export default App;
