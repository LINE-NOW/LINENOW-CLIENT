import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Updated CSS import

import WaitingCard from "@components/waitingCard/WaitingCard";
import WaitingCardEmpty from "@components/waitingCard/WaitingCardEmpty";

import { useGetWaitings } from "@hooks/apis/waiting";

const MainNavigationWaitingList = () => {
  const { data: waitings = [] } = useGetWaitings("waiting");

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
