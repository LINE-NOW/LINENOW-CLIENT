import React from "react";
import { Modal } from "@linenow/core/components";

const WaitingCancelModal = ({
  modalData,
  onClose,
}: {
  modalData: any;
  onClose: () => void;
}) => (
  <Modal
    title={modalData.title}
    sub={modalData.sub}
    primaryButton={modalData.primaryButton}
    secondButton={modalData.secondButton}
    onClose={onClose}
  />
);

export default WaitingCancelModal;
