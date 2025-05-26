import { useNavigate } from "react-router-dom";

import { css } from "@emotion/react";
import { Flex, Label } from "@linenow/core/components";

import { IMAGE } from "@constants/image";
import { ROUTE } from "@constants/route";

const NavigationOnboarding = () => {
  const navigate = useNavigate();

  return (
    <Flex
      alignItem="center"
      css={getAnimation}
      onClick={() => {
        navigate(ROUTE.DEFAULT);
      }}
    >
      <img src={IMAGE.NAVIGATION_ON_BOARDING} />
      <div css={getWrapperStyle}>
        <Label font="caption" color="white">
          라인나우에 오신 것을 환영해요!
        </Label>
        <Label font="body2_b" color="white">
          더 많은 부스 둘러보기
        </Label>
      </div>
    </Flex>
  );
};

export default NavigationOnboarding;

const getWrapperStyle = () => css`
  display: flex;
  padding: 0.375rem 1rem;
  flex-direction: column;
  align-items: center;

  border-radius: 0.5rem;
  background: rgba(26, 30, 39, 0.8);

  box-shadow: 0px 1px 5px 2px rgba(26, 30, 39, 0.1);
`;

const getAnimation = () => css`
  cursor: pointer;
  position: absolute;
  left: 3rem;
  top: 28px;
  transform: translateY(-50%);

  /* 애니메이션 추가 */
  animation: floating 2s ease-in-out infinite;
  /* 애니메이션 정의 */
  @keyframes floating {
    0% {
      opacity: 1;
    }
    50% {
      left: 2.5rem;
      opacity: 0.9;
      transform: translateY(-50%) scale(0.98);
    }
    100% {
      opacity: 1;
    }
  }
`;
