import { useCallback, useState } from "react";
import InfoBottomButton from "@components/infobottomButton/InfoBottomButton";
import WaitingCheckPeople from "./WaitingCheckPeople";

import { useNavigate } from "react-router-dom";
import { Booth } from "@interfaces/booth";
import { Button, ButtonLayout } from "@linenow/core/components";

interface WaitingCheckModalProps {
  onClose: () => void;
  booth: Booth;
}

const WaitingCheckModal = ({ onClose, booth }: WaitingCheckModalProps) => {
  const navigate = useNavigate();
  const [checkedPeople, setCheckedPeople] = useState<number | null>(1);

  const handleConfirm = useCallback(() => {
    if (checkedPeople) {
      navigate("/check", { state: { checkedPeople, booth } });
    }
  }, [checkedPeople, booth, navigate]);

  return (
    <InfoBottomButton
      informationTitle="입장 인원을 선택해주세요"
      informationSub="다인원의 경우 부스 내부 사정에 따라
      대기 순번이 뒤로 밀릴 수 있습니다."
    >
      <WaitingCheckPeople onCheck={setCheckedPeople} />
      <ButtonLayout colCount={2}>
        <Button variant="outline" onClick={onClose}>
          <span>취소하기</span>
        </Button>
        <Button variant="blue" onClick={handleConfirm}>
          <span>확인</span>
        </Button>
      </ButtonLayout>
    </InfoBottomButton>
  );
};

export default WaitingCheckModal;
