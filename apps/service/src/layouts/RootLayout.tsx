import { Outlet } from "react-router-dom";

// components
import {
  BottomSheetProvider,
  ModalProvider,
  ToastProvider,
} from "@linenow/core/components";
// import EnteringBottomsheetProvider from "@components/bottomSheet/entering/EnteringBottohSheetProvider";

import { useSocketEnterRoute } from "@hooks/socket/useSocketEnterRoute";
import useSocketEnterings from "@hooks/socket/useSocketEnterings";
import FullSpinner from "@components/spinner/FullSpinner";

// hooks

const RootLayout = () => {
  useSocketEnterRoute();
  useSocketEnterings();
  // const { isLogin } = useAuth();

  return (
    <>
      {/* {isLogin && <EnteringBottomsheetProvider />} */}
      <FullSpinner />
      <ToastProvider />
      <ModalProvider />
      <BottomSheetProvider />
      <Outlet />
    </>
  );
};

export default RootLayout;
