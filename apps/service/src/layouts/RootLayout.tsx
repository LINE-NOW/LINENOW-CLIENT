import { Outlet } from "react-router-dom";

// components
import {
  BottomSheetProvider,
  ModalProvider,
  ToastProvider,
} from "@linenow/core/components";
// import EnteringBottomsheetProvider from "@components/bottomSheet/entering/EnteringBottohSheetProvider";
import useAuth from "@hooks/useAuth";
import { useSocketEnterRoute } from "@hooks/socket/useSocketEnterRoute";
import useSocketEnterings from "@hooks/socket/useSocketEnterings";

// hooks

const RootLayout = () => {
  useSocketEnterRoute();
  useSocketEnterings();
  const { isLogin } = useAuth();

  return (
    <>
      {/* {isLogin && <EnteringBottomsheetProvider />} */}
      <ToastProvider />
      <ModalProvider />
      <BottomSheetProvider />
      <Outlet />
    </>
  );
};

export default RootLayout;
