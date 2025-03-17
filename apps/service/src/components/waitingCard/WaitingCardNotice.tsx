import * as S from "./WaitingCard.styled";
import { Button, Flex, Label } from "@linenow/core/components";

type WaitingCardNoticeType = "login" | "empty";

interface Config {
  titleLabel: string;
  descriptionLabel: string;
  button: React.ComponentProps<typeof Button>;
}

type Configs = Record<WaitingCardNoticeType, Config>;
const configs: Configs = {
  login: {
    titleLabel: "라인나우로 편하게 대기해보세요!",
    descriptionLabel: "라인나우로 편하게 대기해보세요!",
    button: { variant: "lime", children: "전화번호로 로그인하기" },
  },
  empty: {
    titleLabel: "대기중인 부스가 아직 없어요!",
    descriptionLabel: "대기를 통해 쉽게 부스에 입장해보세요!",
    button: { variant: "blueLight", children: "지도로 둘러보기" },
  },
};

interface WaitingCardNoticeProps {
  type: WaitingCardNoticeType;
}
const WaitingCardNotice = (props: WaitingCardNoticeProps) => {
  const { type } = props;
  const config = configs[type];

  return (
    <Flex
      as="section"
      direction="column"
      gap="0.75rem"
      css={[S.getWaitingCardStyle("black")]}
    >
      <Flex
        direction="column"
        gap="0.25rem"
        alignItem="center"
        justifyContent="center"
        width="100%"
        height="3rem"
      >
        <Label font="body2_b" color="white">
          {config.titleLabel}
        </Label>
        <Label font="body3" color="grayLight">
          {config.descriptionLabel}
        </Label>
      </Flex>

      <Button {...config.button} />
    </Flex>
  );
};

export default WaitingCardNotice;
