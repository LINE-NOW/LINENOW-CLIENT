import { ROUTE } from "@constants/route";
import { css } from "@emotion/react";
import { Label } from "@linenow/core/components";
import { useLocation, useNavigate } from "react-router-dom";

const NavigateHomeButton = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // 외부 진입인데 진입점이 Home이 아닐 경우
  if (location.key === "default" && location.pathname !== ROUTE.DEFAULT) {
    return (
      <button
        css={getContainerStyle}
        onClick={() => {
          navigate(ROUTE.DEFAULT);
        }}
      >
        <Label color="white" font="caption">
          더 많은 부스 둘러보기
        </Label>
      </button>
    );
  }

  return null;
};

export default NavigateHomeButton;

const getContainerStyle = () => css`
  cursor: pointer;
  position: fixed;
  transform: translateX(-50%);

  &:hover {
    background-color: rgba(0, 0, 0, 0.6);
  }

  left: 50%;
  top: 1rem;
  z-index: 9999999999999;

  width: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.125rem;
  padding: 0.5rem 1rem;
  border-radius: 20rem;

  background-color: rgba(0, 0, 0, 0.4);
  box-shadow: 0px 1px 5px 2px rgba(26, 30, 39, 0.1);

  /* 애니메이션 추가 */
  animation: floating 2s ease-in-out infinite;

  /* 애니메이션 정의 */
  @keyframes floating {
    0% {
      transform: translate(-50%, 0);
    }
    50% {
      transform: translate(-50%, 5px);
    }
    100% {
      transform: translate(-50%, 0);
    }
  }
`;
