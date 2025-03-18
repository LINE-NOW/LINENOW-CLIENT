import * as S from "./WaitingCard.styled";
import { Button, Flex, Label } from "@linenow/core/components";

interface WaitingCardNoticeProps {
  titleLabel: string;
  descriptionLabel: string;
  button: React.ComponentProps<typeof Button>;
  onClick: () => void;
}

const WaitingCardNotice = (props: WaitingCardNoticeProps) => {
  const { titleLabel, descriptionLabel, button, onClick } = props;

  return (
    <Flex
      as="section"
      direction="column"
      gap="0.75rem"
      css={[S.getWaitingCardStyle("black")]}
      onClick={onClick}
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
          {titleLabel}
        </Label>
        <Label font="body3" color="grayLight">
          {descriptionLabel}
        </Label>
      </Flex>

      <Button {...button} />
    </Flex>
  );
};

export default WaitingCardNotice;
