import { useEffect, useState } from "react";

//component
import * as S from "./MainNavigation.styled";
import Spinner from "@components/spinner/Spinner";

import WaitingCard from "@components/waitingCard/WaitingCard";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Updated CSS import

// constants
import { MAIN_NAVIGATION_HEIGHT } from "@constants/style";

// hooks
import { useGetNowWaitings } from "@hooks/apis/waiting";
import WaitingCardLogin from "@components/waitingCard/WaitingCardLogin";

// types
import { Waiting } from "@interfaces/waiting";
import WaitingCardNoCard from "@components/waitingCard/WaitingCardNoCard";
import { Icon, IconLabel, Label, LinkButton } from "@linenow/design-system";

interface MainNavigationProps {
  isFold: boolean;
  isLogin: boolean;
}

const MainNavigation = ({ isFold, isLogin }: MainNavigationProps) => {
  const { data, isLoading } = useGetNowWaitings(isLogin);
  const [waitings, setWaitings] = useState<Waiting[]>([]);

  useEffect(() => {
    setWaitings(isLogin ? data || [] : []);
  }, [data, isLogin]);

  const renderWaitingCard = () => {
    if (waitings.length === 0) {
      return isLogin ? <WaitingCardNoCard /> : <WaitingCardLogin />;
    } else {
      return (
        <Swiper
          spaceBetween={8}
          slidesPerView={1}
          style={{ width: "100%", overflow: "visible" }}
        >
          {waitings?.map((item, index) => (
            <SwiperSlide key={index}>
              <WaitingCard waiting={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      );
    }
  };

  const renderTitleContent = () => {
    if (isLogin) {
      return (
        <>
          <LinkButton to="my-waiting">
            <IconLabel
              iconPosition="right"
              gap="0.25rem"
              icon="right"
              iconProps={{ size: 16, color: "white" }}
              css={S.getNavigationTitleStyle()}
              font={isFold ? "head2" : "head3"}
              color="white"
            >
              <span>나의 대기</span>
              <Label color="lime">{waitings.length}개</Label>
            </IconLabel>
          </LinkButton>

          <LinkButton to="/setting">
            <Icon icon="setting" />
          </LinkButton>
        </>
      );
    } else {
      return (
        <img
          style={{ height: "1.5rem" }}
          src="/images/image_vertical_logo.svg"
        />
      );
    }
  };

  if (isLoading) {
    return (
      <S.MainNavigationWrapper
        style={{
          height: `${
            isFold ? MAIN_NAVIGATION_HEIGHT.fold : MAIN_NAVIGATION_HEIGHT.unfold
          }`,
          paddingBottom: `${isFold ? "1rem" : "1.5rem"}`,
        }}
      >
        <Spinner />
      </S.MainNavigationWrapper>
    );
  }

  return (
    <S.MainNavigationWrapper
      style={{
        height: `${
          isFold ? MAIN_NAVIGATION_HEIGHT.fold : MAIN_NAVIGATION_HEIGHT.unfold
        }`,
        paddingBottom: `${isFold ? "1rem" : "1.5rem"}`,
      }}
    >
      <S.MainNavigationTitleWrapper>
        {renderTitleContent()}
      </S.MainNavigationTitleWrapper>
      {renderWaitingCard()}
    </S.MainNavigationWrapper>
  );
};
export default MainNavigation;
