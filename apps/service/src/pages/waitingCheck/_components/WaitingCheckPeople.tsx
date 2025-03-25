import { useState } from "react";
import * as S from "./WaitingCheckComponents.styled";

interface WaitingCheckPeopleProps {
  onCheck: (num: number | null) => void;
}

const WaitingCheckPeople = ({ onCheck }: WaitingCheckPeopleProps) => {
  const [checkedPeople, setCheckedPeople] = useState<number | null>(1);

  const toggleCheck = (num: number) => {
    setCheckedPeople((prevCheckedPeople) => {
      const newCheckedPeople = prevCheckedPeople === num ? null : num;
      onCheck(newCheckedPeople);
      return newCheckedPeople;
    });
  };

  return (
    <S.WaitingCheckContainer>
      {Array.from({ length: 8 }, (_, index) => {
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
