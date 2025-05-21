import InfoBottomButton from "@components/infobottomButton/InfoBottomButton";

import { useState } from "react";
import * as S from "./WaitingCheckComponents.styled";

import { Button, ButtonLayout } from "@linenow/core/components";
import { useNavigate } from "react-router-dom";
import { postWaitingRegister } from "@apis/domains/waiting/postWaiting";
import { SPLASH_DURATION, useSplash } from "./splash/SplashContext";
import { ROUTE } from "@constants/route";

interface WaitingCheckCautionModalProps {
  boothID: number;
  checkedPeople: number;
  onClose: () => void;
}

const WaitingCheckCautionModal = (props: WaitingCheckCautionModalProps) => {
  const { boothID, checkedPeople, onClose } = props;
  const [checked, setChecked] = useState(false);

  const { showSplash } = useSplash();
  const navigate = useNavigate();

  const handleCancel = () => {
    onClose();
  };

  const handleConfirm = async () => {
    showSplash();
    try {
      const result = await postWaitingRegister({
        booth_id: boothID,
        person_num: checkedPeople,
      });

      const waitingID = result.waiting_id;
      if (!waitingID) {
        // console.warn("응답에 waitingId없음 ㅜ");
        return;
      }

      setTimeout(() => {
        navigate(ROUTE.WAITING_DETAIL(waitingID), {
          replace: true,
          state: {
            withAnimation: true,
            showToast: true,
            toastMessage: "대기를 등록했어요!",
          },
        });
      }, SPLASH_DURATION);
    } catch (error) {
      // console.error("대기 등록 실패", error);
    }
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
          <span>대기하기</span>
        </Button>
      </ButtonLayout>
    </InfoBottomButton>
  );
};

export default WaitingCheckCautionModal;
