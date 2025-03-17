import * as S from "./MainNavigation.styled";
import { Label } from "@linenow/core/components";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Updated CSS import

import useMainViewType from "@pages/main/_hooks/useMainViewType";
import useMainScroll from "@pages/main/_hooks/useMainScroll";

import WaitingCard from "@components/waitingCard/WaitingCard";
import { dummyWaitings } from "./dummy";

interface MainNavigationProps extends React.PropsWithChildren {}

const MainNavigation = (props: MainNavigationProps) => {
  const { children } = props;
  const { isFold } = useMainScroll();
  const { viewType } = useMainViewType();

  const waitings = dummyWaitings;

  const WaitingCardList = () => {
    if (isFold) return;

    return (
      <Swiper
        spaceBetween={8}
        slidesPerView={1}
        style={{ width: "100%", overflow: "visible" }}
      >
        {waitings.map((waiting, index) => (
          <SwiperSlide key={index}>
            <WaitingCard {...waiting} />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  };

  return (
    <>
      <header css={S.getWrapper(viewType, isFold)}>
        {/* 상단 대기 리스트 */}
        <div css={S.getNavigationWrapper(viewType, isFold)}>
          <Label font="head2" color="white">
            라인나우
          </Label>
          <WaitingCardList />
        </div>

        {/* 부스 리스트 헤더 */}
        {children}
      </header>

      {/* 부스 리스트 용 공백 */}
      {viewType === "list" && <div css={S.getSpace(isFold)} />}
    </>
  );
};
export default MainNavigation;
