import { useState } from "react";
import { useLocation } from "react-router-dom";
import * as S from "./WaitingCheckPage.styled";
import BottomButton from "@components/bottomButton/BottomButton";

import Separator from "@components/separator/Separator";
import WaitingCard from "@components/waitingCard/WaitingCard";
import WaitingDetailCaution from "@pages/waitingDetail/_components/WaitingDetailCaution";
import WaitingCheckCautionModal from "./_components/WaitingCheckCautionModal";
import { Button } from "@linenow/design-system";

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
        <WaitingCard
          waiting={{
            waitingStatus: "check",
            waitingTeamsAhead: booth.total_waiting_teams,
            booth: {
              name: booth.name,
              boothID: booth.id,
              location: booth.location,
              thumbnail:
                typeof booth.images[0] === "string"
                  ? booth.images[0]
                  : "/images/image_waitingNoCard.png",
            },

            partySize: checkedPeople,
          }}
          isButton={false}
          disableClick={true}
        />
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
