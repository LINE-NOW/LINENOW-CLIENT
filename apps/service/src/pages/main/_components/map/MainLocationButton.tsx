import * as S from "./MainLocationButton.styled";
import { Button, Icon } from "@linenow/core/components";

interface LocationButtonProps extends React.ComponentProps<typeof Button> {
  lat?: number;
  lon?: number;
}

export const MyLocationButton = ({
  lat = 37.5584809,
  lon = 127.0004067,
  ...buttonProps
}: LocationButtonProps) => {
  const handleMoveToMyLocation = () => {
    console.log("todo 좌표 atom에 ㄱㄱ");
  };

  return (
    <Button
      width="auto"
      variant="outline"
      css={[S.getStyle()]}
      onClick={handleMoveToMyLocation}
      {...buttonProps}
    >
      <Icon icon="my_location" color="gray" />
    </Button>
  );
};

export const FestivalLocation = ({
  lat = 37.5584809,
  lon = 127.0004067,
  ...buttonProps
}: LocationButtonProps) => {
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
