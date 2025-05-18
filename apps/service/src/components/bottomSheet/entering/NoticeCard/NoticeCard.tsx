import { useModal } from "@linenow/core/hooks";
import * as S from "./NoticeCard.styled";
import { Flex, IconLabel, Label } from "@linenow/core/components";
import { useModalCancelAllWaiting } from "@components/modal/waiting";

const NoticeCard = () => {
  const modal = useModalCancelAllWaiting();
  const { openModal } = useModal();

  return (
    <Flex
      direction="column"
      gap="0.5rem"
      padding="0.875rem 1.25rem"
      css={S.getContainerStyle}
      onClick={() => openModal(modal)}
    >
      <Label font="body2" color="blackLight">
        제한 시간 10분 내로 부스에 입장해주세요. <br />
        입장하지 않으실 경우 반드시 입장 취소 버튼을 눌러주세요.
        <br />
        입장 취소 하지 않고 노쇼할 경우, 전체 부스 대기가 취소돼요.
      </Label>
      <IconLabel
        font="chip"
        color="blue"
        iconPosition="right"
        icon={"right"}
        iconProps={{ color: "blue", size: 16 }}
        gap={"0.25rem"}
      >
        다른 대기 취소하기
      </IconLabel>
    </Flex>
  );
};
export default NoticeCard;
