import { useModal } from "@linenow/core/hooks";
import * as S from "./PauseOverlay.styled";
import { useAtom } from "jotai";
import { pausedOverlayAtom } from "@hooks/useOverlay";
import { useEffect } from "react";

const PauseOverlay = () => {
  const { modal } = useModal();
  const [pausedOverlay, setPausedOverlay] = useAtom(pausedOverlayAtom);

  useEffect(() => {
    if (!modal.isOpen && pausedOverlay) {
      console.log("overlay 여부", pausedOverlay);
      setPausedOverlay(true);
    }
  }, [modal.isOpen, pausedOverlay]);

  if (!pausedOverlay) {
    return null;
  }

  return (
    <S.PauseOverlayWrapper>
      <S.PauseOverlayContainer>
        {!modal.isOpen && (
          <S.PauseOverlayTextContainer>
            <p className="q">잠깐, 오픈런 손님을 다 받으셨나요?</p>
            <p className="click">
              라인나우 대기를 받으시려면 <span className="lime">운영시작</span>
              을 클릭해주세요!
            </p>
          </S.PauseOverlayTextContainer>
        )}
      </S.PauseOverlayContainer>
    </S.PauseOverlayWrapper>
  );
};

export default PauseOverlay;
