import styled from "@emotion/styled";

export const PauseOverlayWrapper = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PauseOverlayContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const PauseOverlayTextContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 15%;

  /* TODO: 디자인시스템 확인 후 변경 필요 */
  .q {
    color: #fff;
    text-align: center;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
  }

  .click {
    color: #fff;
    font-family: Pretendard;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: 2;
  }

  .lime {
    color: ${({ theme }) => theme.fontColors.lime};
    text-shadow: 0px 0px 50px #fff;
  }
`;

export const PauseOverlayFlowImg = styled.img`
  width: 530px;
  height: 160px;
  position: absolute;
  top: 80px;
  left: 50px;
`;
