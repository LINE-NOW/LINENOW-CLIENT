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
      <Label
        font="body2"
        color="blackLight"
        children={`이용하지 않으실 경우 반드시 대기를 취소해주세요.\n입장 취소 없이 노쇼 시, 전체 대기가 취소됩니다.`}
      />

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
