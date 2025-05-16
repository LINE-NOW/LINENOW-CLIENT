import { Flex, Label } from "@linenow/core/components";

interface MyWaitingEmptyViewProps {
  type?: "waiting" | "finished";
}

const MyWaitingEmptyView = (props: MyWaitingEmptyViewProps) => {
  const { type = "waiting" } = props;
  return (
    <Flex width="100%" padding="2rem" justifyContent="center">
      <Label font="body2" color="grayLight">
        {type === "waiting" ? "대기중인" : "대기 취소된"} 부스가 아직 없어요!
      </Label>
    </Flex>
  );
};

export default MyWaitingEmptyView;
