import { useState } from "react";
import { useLocation } from "react-router-dom";
import BottomButton from "@components/bottomButton/BottomButton";

import WaitingDetailCaution from "@pages/waitingDetail/_components/WaitingDetailCaution";
import WaitingCheckCautionModal from "./_components/WaitingCheckCautionModal";
import { Button, Separator } from "@linenow/core/components";
import WaitingCheckHead from "../waitingDetail/_components/WaitingDetailHead";

const WaitingCheckPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const location = useLocation();
  const { checkedPeople, booth } = location.state || {};

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <WaitingCheckHead checkedPeople={checkedPeople} boothName={booth.name} />

      <Separator height={8} />

      <WaitingDetailCaution />

      <BottomButton>
        <Button variant="blue" onClick={handleOpenModal}>
          <span>계속 진행하기</span>
        </Button>
      </BottomButton>

      {isModalOpen && (
        <WaitingCheckCautionModal
          checkedPeople={checkedPeople}
          boothID={booth.id}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default WaitingCheckPage;
