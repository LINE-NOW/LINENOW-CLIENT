// router
import { RouterProvider } from "react-router-dom";
import router from "@routes/router";

// react-query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

//components
import FullSpinner from "@components/spinner/FullSpinner";
import { LinenowProvider } from "@linenow/core/components";
import { useBottomSheet } from "@linenow/core/hooks";

function App() {
  const queryClient = new QueryClient();
  const { openBottomSheet } = useBottomSheet();
  return (
    <QueryClientProvider client={queryClient}>
      {/* <TestTool /> */}
      <LinenowProvider>
        <button
          onClick={() => openBottomSheet({ children: <div>1</div> })}
          style={{ zIndex: 20000, backgroundColor: "white", padding: "20px" }}
        >
          바텀시트
        </button>
        <FullSpinner />
        <RouterProvider router={router} />
      </LinenowProvider>
    </QueryClientProvider>
  );
}

export default App;
