import styled from "@emotion/styled";

import useEntranceBottomSheet from "@hooks/useEntrance";
import { useModal } from "@linenow/core/hooks";

const TestTool = () => {
  const { openEntrance } = useEntranceBottomSheet();

  return (
    <TestToolWrapper>
      <div>프론트의 테스트 툴입니다</div>
      <button
        onClick={() => {
          openEntrance();
        }}
      >
        입장 바텀시트 열기
      </button>
    </TestToolWrapper>
  );
};

export default TestTool;

const TestToolWrapper = styled.section`
  position: fixed;
  z-index: 999999999;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  gap: 20px;

  background-color: #ffffff;
  button {
    padding: 8px;
    background-color: blue;
    color: white;
  }
  cursor: pointer;
`;
