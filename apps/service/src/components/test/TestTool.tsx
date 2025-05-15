import CancelBottomSheetContent from "@components/bottomSheet/cancel/CancelBottomSheet";
import styled from "@emotion/styled";
import { useBottomSheet } from "@linenow/core/hooks";

const TestTool = () => {
  const { openBottomSheet } = useBottomSheet();
  const openCancelBottomSheet = () => {
    openBottomSheet({
      children: (
        <CancelBottomSheetContent
          waitingID={1}
          waitingStatus={"time_over"}
          waitingTeamsAhead={2}
          canceledAt={"2025-05-04T14:21:19.928435"}
          booth={{
            boothID: 1,
            name: "찬주를 위한 취소 부스",
            description: "아...언제끝나냐",
            location: "우린 할 수 있어!",
          }}
        />
      ),
    });
  };
  return (
    <TestToolContainer>
      for 찬주...
      <TestToolButton onClick={openCancelBottomSheet}>
        취소 바텀시트 열기
      </TestToolButton>
    </TestToolContainer>
  );
};
export default TestTool;

const TestToolContainer = styled.section`
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  opacity: 0.5;
  background-color: aliceblue;
  border: 1px solid black;

  padding: 1rem;
`;

const TestToolButton = styled.button`
  background-color: blue;
  color: white;
  padding: 0.5rem;
  border-radius: 0.25rem;
`;
