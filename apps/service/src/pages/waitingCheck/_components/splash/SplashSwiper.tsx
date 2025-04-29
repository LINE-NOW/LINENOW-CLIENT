//swiper import
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination } from "swiper/modules";

import { useEffect } from "react";

import { splashData } from "./splashData";

import * as S from "./Splash.styles";

const SplashSwiper: React.FC = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <S.OverlayWrapper>
      <Swiper
        modules={[Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {splashData.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <S.SlideContainer>
              <img src={slide.img} alt={`${idx}번째 이미지`} />
              <p>{slide.text}</p>
            </S.SlideContainer>
          </SwiperSlide>
        ))}
      </Swiper>
    </S.OverlayWrapper>
  );
};

export default SplashSwiper;
