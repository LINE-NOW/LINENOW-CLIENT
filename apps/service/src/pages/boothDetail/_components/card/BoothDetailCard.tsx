import { Booth } from "@interfaces/booth";
import * as S from "./BoothDeatilCard.styled";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

// TODO: - 간략화 필요
interface BoothDetailContentProps {
  booth: Booth;
}

export const BoothDetailCard = ({ booth }: BoothDetailContentProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return booth.images?.length ? (
    <S.BoothDetailCardWrapper>
      <Swiper
        cssMode={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
        style={{
          width: "100%",
        }}
      >
        {booth.images?.map((image, index) => (
          <SwiperSlide key={index}>
            <S.BoothDetailCardThumbnail
              src={image.image}
              alt={`Booth image ${index + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <S.BoothDetailCardIndicatorWrapper>
        {booth.images?.map((_, index) => (
          <S.BoothDetailCardIndicator
            key={index}
            $active={index === currentIndex}
          />
        ))}
      </S.BoothDetailCardIndicatorWrapper>
    </S.BoothDetailCardWrapper>
  ) : null;
};
