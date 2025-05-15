import { useState, useEffect } from "react";
import * as S from "./WaitingCheckComponents.styled";

interface WaitingCheckPeopleProps {
  onCheck: (num: number | null) => void;
}

const WaitingCheckPeople = ({ onCheck }: WaitingCheckPeopleProps) => {
  const [checkedPeople, setCheckedPeople] = useState<number | null>(1);

  useEffect(() => {
    // checkedPeople이 바뀐 후에 onCheck 호출
    onCheck(checkedPeople);
  }, [checkedPeople, onCheck]);

  const toggleCheck = (num: number) => {
    setCheckedPeople((prevCheckedPeople) =>
      prevCheckedPeople === num ? null : num
    );
  };

  return (
    <S.WaitingCheckContainer>
      {Array.from({ length: 10 }, (_, index) => {
        const num = index + 1;
        const isChecked = checkedPeople === num;

        return (
          <S.WaitingCheckPeopleCircle
            key={num}
            onClick={() => toggleCheck(num)}
            $isChecked={isChecked}
          >
            {num}명
          </S.WaitingCheckPeopleCircle>
        );
      })}
    </S.WaitingCheckContainer>
  );
};

export default WaitingCheckPeople;
