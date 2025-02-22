import { useState } from "react";
import * as S from "./WaitingCheckPeople.styled";

interface WaitingCheckPeopleProps {
  onCheck: (num: number | null) => void;
}

const WaitingCheckPeople = ({ onCheck }: WaitingCheckPeopleProps) => {
  const [checkedPeople, setCheckedPeople] = useState<number | null>(1);

  const toggleCheck = (num: number) => {
    const newCheckedPeople = checkedPeople === num ? null : num;
    setCheckedPeople(newCheckedPeople);
    onCheck(newCheckedPeople);
  };

  return (
    <S.WaitingCheckContainer>
      {[...Array(8)].map((_, index) => {
        const num = index + 1;
        const isChecked = checkedPeople === num;

        return (
          <S.Circle
            key={num}
            onClick={() => toggleCheck(num)}
            $isChecked={isChecked}
          >
            {num}명
          </S.Circle>
        );
      })}
    </S.WaitingCheckContainer>
  );
};

export default WaitingCheckPeople;
