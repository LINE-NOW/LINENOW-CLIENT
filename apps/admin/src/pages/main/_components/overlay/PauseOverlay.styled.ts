import styled from "@emotion/styled";
import { fonts } from "@linenow/core/styles";

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
  gap: 0.625rem;
  align-items: center;
  /* position: absolute;

  top: 50%;
  left: 15%; */

  /* TODO: 디자인시스템 확인 후 변경 필요 */
  .q {
    ${fonts.head2}
    color: ${({ theme }) => theme.backgroundColors.gray};
  }

  .click {
    ${fonts.head1}
    color: ${({ theme }) => theme.backgroundColors.white};
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
