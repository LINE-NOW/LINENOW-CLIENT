import { Outlet } from "react-router-dom";

// components
import {
  BottomSheetProvider,
  ModalProvider,
  ToastProvider,
} from "@linenow/core/components";
import EnteringBottomsheetProvider from "@components/bottomSheet/entering/EnteringBottohSheetProvider";
import useAuth from "@hooks/useAuth";

const RootLayout = () => {
  const { isLogin } = useAuth();
  return (
    <>
      {isLogin && <EnteringBottomsheetProvider />}
      <ToastProvider />
      <ModalProvider />
      <BottomSheetProvider />
      <Outlet />
    </>
  );
};

export default RootLayout;
