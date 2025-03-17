import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Updated CSS import

import WaitingCard from "@components/waitingCard/WaitingCard";
import WaitingCardLogin from "@components/waitingCard/WaitingCardLogin";
import WaitingCardEmpty from "@components/waitingCard/WaitingCardEmpty";

import useAuth from "@hooks/useAuth";
import { dummyWaitings } from "./dummy";

const MainNavigationWaitingList = () => {
  const { isLogin } = useAuth();

  const waitings = dummyWaitings;
  if (!isLogin) return <WaitingCardLogin />;
  if (waitings.length === 0) return <WaitingCardEmpty />;

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

export default MainNavigationWaitingList;
