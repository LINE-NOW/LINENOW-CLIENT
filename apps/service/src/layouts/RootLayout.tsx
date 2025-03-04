import Bottomsheet from "@components/bottomsheet/Bottomsheet";

import useCheckWaitingStatus from "@hooks/useCheckWaitingStatus";
import { ModalProvider } from "@linenow/design-system";

import { Outlet } from "react-router-dom";

const RootLayout = () => {
  useCheckWaitingStatus();
  return (
    <>
      <ModalProvider />
      <Bottomsheet />
      <Outlet />
    </>
  );
};

export default RootLayout;
