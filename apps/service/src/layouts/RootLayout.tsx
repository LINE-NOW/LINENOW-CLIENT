import Bottomsheet from "@components/bottomsheet/Bottomsheet";

import useCheckWaitingStatus from "@hooks/useCheckWaitingStatus";
import { Modal } from "@linenow/design-system";

import { Outlet } from "react-router-dom";

const RootLayout = () => {
  useCheckWaitingStatus();
  return (
    <>
      <Modal />
      <Bottomsheet />
      <Outlet />
    </>
  );
};

export default RootLayout;
