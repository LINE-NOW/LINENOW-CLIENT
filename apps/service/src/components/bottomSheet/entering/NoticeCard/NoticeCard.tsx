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
        다른 부스의 대기가 아직 진행중이에요. <br />
        원활한 운영을 위해 입장하실 부스 외 대기는 취소해주세요!
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
