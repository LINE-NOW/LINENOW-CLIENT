import { useState } from "react";
import InfoBottomButton from "@components/infobottomButton/InfoBottomButton";
import WaitingCheckPeople from "./WaitingCheckPeople";
import Button from "@components/button/Button";
import ButtonLayout from "@components/button/ButtonLayout";
import { useNavigate } from "react-router-dom";
import { Booth } from "@interfaces/booth";

interface WaitingCheckModalProps {
  onClose: () => void;
  booth: Booth; // 부스 타입을 지정
}

const WaitingCheckModal = ({ onClose, booth }: WaitingCheckModalProps) => {
  const navigate = useNavigate();
  const [checkedPeople, setCheckedPeople] = useState<number | null>(1);

  const handleCancel = () => {
    onClose();
  };

  const handleConfirm = () => {
    navigate("/check", { state: { checkedPeople, booth } });
  };

  return (
    <InfoBottomButton
      informationTitle="입장 인원을 선택해주세요"
      informationSub="다인원의 경우 부스 내부 사정에 따라 대기 순번이 뒤로 밀릴 수 있습니다."
    >
      <WaitingCheckPeople onCheck={setCheckedPeople} />
      <ButtonLayout $col={2}>
        <Button scheme="grayLight" shape="outline" onClick={handleCancel}>
          <span>취소하기</span>
        </Button>
        <Button scheme="blue" onClick={handleConfirm}>
          <span>확인</span>
        </Button>
      </ButtonLayout>
    </InfoBottomButton>
  );
};

export default WaitingCheckModal;
