import { Outlet } from "react-router-dom";

// components
import {
  BottomSheetProvider,
  ModalProvider,
  ToastProvider,
} from "@linenow/core/components";
import Countdown from "@components/_test/countdown/Countdown";

const TestRootLayout = () => {
  return (
    <>
      <Countdown />
      <ToastProvider />
      <ModalProvider />
      <BottomSheetProvider />
      <Outlet />
    </>
  );
};

export default TestRootLayout;
