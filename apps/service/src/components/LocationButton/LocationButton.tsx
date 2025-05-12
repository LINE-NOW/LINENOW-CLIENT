// components
import * as S from "./LocationButton.styled";
import { Button, Icon } from "@linenow/core/components";

export const MyLocationButton = (
  props: React.ComponentProps<typeof Button>
) => {
  const { ...buttonProps } = props;
  const handleTest = () => {
    console.log("hhhh");
  };

  return (
    <Button
      width="auto"
      variant={"outline"}
      css={[S.getStyle()]}
      onClick={handleTest}
      {...buttonProps}
    >
      <Icon icon="my_location" color="gray" />
    </Button>
  );
};

export const FestivalLocation = (
  props: React.ComponentProps<typeof Button>
) => {
  const { ...buttonProps } = props;
  const handleTest = () => {
    console.log("kkkk");
  };

  return (
    <Button
      width="auto"
      variant={"outline"}
      css={[S.getStyle()]}
      onClick={handleTest}
      {...buttonProps}
    >
      <Icon icon="fetival_location" color="gray" />
    </Button>
  );
};
