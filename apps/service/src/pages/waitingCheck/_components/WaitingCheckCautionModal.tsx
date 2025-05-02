import InfoBottomButton from "@components/infobottomButton/InfoBottomButton";

import { useState } from "react";
import * as S from "./WaitingCheckComponents.styled";

import { Button, ButtonLayout } from "@linenow/core/components";

interface WaitingCheckModalProps {
  onClose: () => void;
  checkedPeople: number;
  boothId: number;
}

const WaitingCheckCautionModal = ({ onClose }: WaitingCheckModalProps) => {
  const [checked, setChecked] = useState(false);

  const handleCancel = () => {
    onClose();
  };

  const handleConfirm = () => {
    console.log("post");
    // postWaitingRegister({ boothID: boothId, partySize: checkedPeople });
  };

  return (
    <InfoBottomButton
      informationTitle="유의사항을 꼭 숙지해주세요"
      informationSub="입장 순서가 되면 10분의 시간이 주어지며,
      제한 시간 내에 도착하지 않으면 대기가 자동 취소됩니다.
      입장하지 않으실 경우에는 반드시 입장 취소 버튼을 눌러 의사를 전달해 주세요.
      "
    >
      <S.WaitingCheckBoxWrapper $checked={checked}>
        <S.WaitingCheckBox
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        <S.WaitingCheckBoxLabel $checked={checked}>
          숙지했어요
        </S.WaitingCheckBoxLabel>
      </S.WaitingCheckBoxWrapper>
      <ButtonLayout colCount={2}>
        <Button variant="outline" onClick={handleCancel}>
          <span>취소하기</span>
        </Button>
        <Button variant="blue" onClick={handleConfirm} disabled={!checked}>
          <span>대기 줄 서기</span>
        </Button>
      </ButtonLayout>
    </InfoBottomButton>
  );
};

export default WaitingCheckCautionModal;
