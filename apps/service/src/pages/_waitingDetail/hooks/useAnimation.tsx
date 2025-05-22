import { useState, useEffect } from "react";

const useAnimation = (withAnimation: boolean) => {
  const [fadeInCard, setFadeInCard] = useState(false);
  const [slideUpCard, setSlideUpCard] = useState(false);
  const [showRest, setShowRest] = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const animationState = sessionStorage.getItem("animationState");

    // 이미 애니메이션 완료했거나 처음부터 withAnimation이 false이면 바로 보여줌
    if (!withAnimation || animationState === "done") {
      setFadeInCard(true);
      setSlideUpCard(true);
      setShowRest(true);
      return;
    }

    // 애니메이션 처음 실행
    const fadeInTimeout = setTimeout(() => setFadeInCard(true), 800);
    const slideUpTimeout = setTimeout(() => setSlideUpCard(true), 1200);
    const showRestTimeout = setTimeout(() => {
      setShowRest(true);
      setTimeout(() => {
        setShowToast(true);
      }, 300);
    }, 1500);

    // 애니메이션 완료 표시
    const markDoneTimeout = setTimeout(() => {
      sessionStorage.setItem("animationState", "done");
    }, 2000);

    return () => {
      clearTimeout(fadeInTimeout);
      clearTimeout(slideUpTimeout);
      clearTimeout(showRestTimeout);
      clearTimeout(markDoneTimeout);
    };
  }, [withAnimation]);

  return {
    fadeInCard,
    slideUpCard,
    showRest,
    showToast,
  };
};

export default useAnimation;
