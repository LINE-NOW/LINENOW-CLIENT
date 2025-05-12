import { useAtom } from "jotai";
import * as S from "./MainLocationButton.styled";
import { Button, Icon } from "@linenow/core/components";
import { latLngAtom } from "@atoms/location";

export const MyLocationButton = ({
  ...buttonProps
}: React.ComponentProps<typeof Button>) => {
  const [_, setLatLng] = useAtom(latLngAtom);
  const handleMoveToMyLocation = () => {
    if (!navigator.geolocation) {
      console.error("Geolocation을 지원하지 않는 브라우저입니다.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        setLatLng({ lat, lon });
      },
      (error) => {
        console.error("위치 정보를 가져오는 데 실패했습니다:", error.message);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
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
  ...buttonProps
}: React.ComponentProps<typeof Button>) => {
  const [_, setLatLng] = useAtom(latLngAtom);

  const handleMoveToFestivalLocation = () => {
    setLatLng({
      lat: 37.55822161540249,
      lon: 127.00019240184307,
    });
  };

  return (
    <Button
      width="auto"
      variant={"outline"}
      css={[S.getStyle()]}
      onClick={handleMoveToFestivalLocation}
      {...buttonProps}
    >
      <Icon icon="fetival_location" color="gray" />
    </Button>
  );
};
