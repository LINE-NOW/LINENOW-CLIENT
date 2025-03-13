import { useState } from "react";
import { useLocation } from "react-router-dom";
import * as S from "./WaitingCheckPage.styled";
import BottomButton from "@components/bottomButton/BottomButton";

import Separator from "@components/separator/Separator";
import WaitingDetailCaution from "@pages/waitingDetail/_components/WaitingDetailCaution";
import WaitingCheckCautionModal from "./_components/WaitingCheckCautionModal";
import { Button } from "@linenow/core/components";

const WaitingCheckPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  // const waitingID = useWaitingId();
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
      <S.WaitingDetailPageBoothCardWrapper>
        <S.WaitingCheckPageTitle>
          줄서기를 진행하시겠어요?
        </S.WaitingCheckPageTitle>
      </S.WaitingDetailPageBoothCardWrapper>

      <Separator />

      <WaitingDetailCaution />

      <BottomButton>
        <Button variant="blue" onClick={handleOpenModal}>
          <span>계속 진행하기</span>
        </Button>
      </BottomButton>

      {isModalOpen && (
        <WaitingCheckCautionModal
          checkedPeople={checkedPeople}
          boothId={booth.id}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default WaitingCheckPage;
