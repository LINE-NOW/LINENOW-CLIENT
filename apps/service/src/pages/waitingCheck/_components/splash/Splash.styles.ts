import styled from "@emotion/styled";
import { fonts } from "@linenow/core/styles";

export const OverlayWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: white;
  z-index: 9999;

  .swiper-pagination {
    position: absolute;
    bottom: calc(50% - 140px);
    z-index: 10;
  }

  .swiper-pagination-bullet {
    background-color: ${({ theme }) => theme.backgroundColors.gray};
    width: 8px;
    height: 8px;
    margin: 0 5px;
  }

  .swiper-pagination-bullet-active {
    background-color: ${({ theme }) => theme.backgroundColors.blue};
  }
`;

export const SlideContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  gap: 16px;
  ${fonts.body2}
  color: ${({ theme }) => theme.fontColors.blackLight};
  white-space: pre-line;

  img {
    width: 120px;
    height: 120px;
    border-radius: 4px;
  }
`;
