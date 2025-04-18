import { Outlet } from "react-router-dom";

// components
import {
  BottomSheetProvider,
  ModalProvider,
  ToastProvider,
} from "@linenow/core/components";

// hooks

const RootLayout = () => {
  // useCheckWaitingStatus();
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
