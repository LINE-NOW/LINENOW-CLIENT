import { Outlet } from "react-router-dom";

// components
import {
  BottomSheetProvider,
  ModalProvider,
  ToastProvider,
} from "@linenow/core/components";

// hooks
import useCheckWaitingStatus from "@hooks/useCheckWaitingStatus";

const RootLayout = () => {
  useCheckWaitingStatus();
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
