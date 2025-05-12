import * as S from "./PauseOverlay.styled";

const PauseOverlay = () => {
  return (
    <S.PauseOverlayWrapper>
      <S.PauseOverlayContainer>
        <S.PauseOverlayTextContainer>
          <p className="q">잠깐, 오픈런 손님을 다 받으셨나요?</p>
          <p className="click">
            라인나우 대기를 받으시려면 <span className="blue">운영시작</span>을
            클릭해주세요!
          </p>
        </S.PauseOverlayTextContainer>
        <S.PauseOverlayFlowImg src="/images/flow.png" />
      </S.PauseOverlayContainer>
    </S.PauseOverlayWrapper>
  );
};

export default PauseOverlay;
