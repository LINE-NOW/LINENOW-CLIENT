import React, { useEffect, useRef, useState } from "react";
import * as S from "./BottomButton.styled";
import ButtonLayout from "@components/button/ButtonLayout";

interface BottomButtonProps {
  children?: React.ReactNode;
  informationTitle?: string;
  informationSub?: string;
}

const BottomButton = ({
  informationTitle,
  informationSub,
  children,
}: BottomButtonProps) => {
  const [height, setHeight] = useState<number>(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.offsetHeight);
    }
  }, []);

  return (
    <>
      <S.BottomButtonWrapper ref={ref}>
        {(informationTitle || informationSub) && (
          <S.BottomButtonInformationWrapper>
            <span>{informationTitle}</span>
            {informationSub && <span className="blue">{informationSub}</span>}
          </S.BottomButtonInformationWrapper>
        )}
        <ButtonLayout $col={1}>{children}</ButtonLayout>
      </S.BottomButtonWrapper>
      <S.BottomButtonPadding $height={height} />
    </>
  );
};

export default BottomButton;
