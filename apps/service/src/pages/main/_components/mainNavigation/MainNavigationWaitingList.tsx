import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Updated CSS import

import { dummyWaitings } from "./dummy";
import WaitingCard from "@components/waitingCard/WaitingCard";
import useAuth from "@hooks/useAuth";
import WaitingCardNotice from "@components/waitingCard/WaitingCardNotice";

const MainNavigationWaitingList = () => {
  const { isLogin } = useAuth();

  const waitings = dummyWaitings;
  if (!isLogin) return <WaitingCardNotice type="login" />;
  if (waitings.length === 0) return <WaitingCardNotice type="empty" />;

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
