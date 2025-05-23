import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Updated CSS import

import WaitingCard from "@components/waitingCard/WaitingCard";
import WaitingCardEmpty from "@components/waitingCard/WaitingCardEmpty";
import { useIsFetching } from "@tanstack/react-query";
import { QUERY_KEY } from "@hooks/apis/query";

import WaitingCardSkeleton from "@components/skeleton/WaitingCard.Skeleton";

interface MainNavigationWaitingListProps {
  waitings: React.ComponentProps<typeof WaitingCard>[];
}
const MainNavigationWaitingList = (props: MainNavigationWaitingListProps) => {
  const { waitings } = props;
  const isFetching = useIsFetching({ queryKey: QUERY_KEY.WAITINGS("waiting") });
  const isFirstFetching = isFetching === 1 && waitings.length === 0;

  if (isFirstFetching) return <WaitingCardSkeleton />;
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
