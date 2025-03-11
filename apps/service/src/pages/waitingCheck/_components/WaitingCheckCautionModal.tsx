import InfoBottomButton from "@components/infobottomButton/InfoBottomButton";

import { useState } from "react";
import * as S from "./WaitingCheckPeople.styled";
import iconBefore from "/icons/icon_checkBox_before.svg";
import iconAfter from "/icons/icon_checkBox_after.svg";
import { usePostWaitingRegister } from "@hooks/apis/waiting";
import { Button, ButtonLayout } from "@linenow/core/src/components";

interface WaitingCheckModalProps {
  onClose: () => void;
  checkedPeople: number;
  boothId: number;
}

const WaitingCheckCautionModal = ({
  onClose,
  checkedPeople,
  boothId,
}: WaitingCheckModalProps) => {
  const [checked, setChecked] = useState(false);

  const handleCancel = () => {
    onClose();
  };

  const { mutate: postWaitingRegister } = usePostWaitingRegister();
  const handleConfirm = () => {
    postWaitingRegister({ boothID: boothId, partySize: checkedPeople });
  };

  return (
    <InfoBottomButton
      informationTitle="유의사항을 꼭 숙지해주세요"
      informationSub="입장 순서가 되면 입장 확정 알림이 가요.
      3분 내로 미확정 시 줄 서기가 자동 취소돼요."
    >
      <S.CheckBoxWrapper>
        <S.CheckBoxImage
          onClick={() => setChecked(!checked)}
          src={checked ? iconAfter : iconBefore}
          alt="체크 박스"
        />
        <span>숙지했어요</span>
      </S.CheckBoxWrapper>
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
