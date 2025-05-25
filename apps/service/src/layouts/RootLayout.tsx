import { Outlet, useLocation } from "react-router-dom";

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
import { useEffect } from "react";
import NavigateHomeButton from "@components/navigation/NavigateHomeButton";

// hooks

const RootLayout = () => {
  useSocketEnterRoute();
  useSocketEnterings();

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);

  return (
    <>
      <NavigateHomeButton />
      <FullSpinner />
      <ToastProvider />
      <ModalProvider />
      <BottomSheetProvider />
      <Outlet />
    </>
  );
};

export default RootLayout;
