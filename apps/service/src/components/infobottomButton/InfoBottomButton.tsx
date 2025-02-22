import * as S from "./InfoBottomButton.styled";

interface BottomButtonProps {
  informationTitle?: string;
  informationSub?: string;
  children?: React.ReactNode;
}

const InfoBottomButton = ({
  informationTitle,
  informationSub,

  children,
}: BottomButtonProps) => {
  return (
    <S.InfoBottomButtonBackground>
      <S.InfoBottomButtonWrapper>
        <S.InfoBottomButtonInformationWrapper>
          <span className="title">{informationTitle}</span>
          <span className="subtitle">{informationSub}</span>
        </S.InfoBottomButtonInformationWrapper>

        <S.InfoBottomButtonCheck>{children}</S.InfoBottomButtonCheck>
      </S.InfoBottomButtonWrapper>
    </S.InfoBottomButtonBackground>
  );
};

export default InfoBottomButton;
