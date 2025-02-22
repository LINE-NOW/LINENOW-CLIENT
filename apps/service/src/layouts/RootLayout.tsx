import Bottomsheet from "@components/bottomsheet/Bottomsheet";
import Modal from "@components/modal/Modal";
import useCheckWaitingStatus from "@hooks/useCheckWaitingStatus";

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
