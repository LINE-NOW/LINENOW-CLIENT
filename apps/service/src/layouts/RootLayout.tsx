import { Outlet } from "react-router-dom";

// components
import {
  BottomSheetProvider,
  ModalProvider,
  ToastProvider,
} from "@linenow/core/components";
import { useSocketEnterRoute } from "@hooks/socket/useSocketEnterRoute";
import useSocketEnterings from "@hooks/socket/useSocketEnterings";

// hooks

const RootLayout = () => {
  useSocketEnterRoute();
  useSocketEnterings();
  return (
    <>
      <ToastProvider />
      <ModalProvider />
      <BottomSheetProvider />
      <Outlet />
    </>
  );
};

export default RootLayout;
