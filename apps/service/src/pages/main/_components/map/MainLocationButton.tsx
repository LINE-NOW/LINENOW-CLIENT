import { useSetAtom } from "jotai";
import * as S from "./MainLocationButton.styled";
import { Button, Icon } from "@linenow/core/components";
import { DEFAULT_LOCATION, latLngAtom } from "@atoms/location";

export const MyLocationButton = ({
  ...buttonProps
}: React.ComponentProps<typeof Button>) => {
  const setLatLng = useSetAtom(latLngAtom);

  const handleMoveToMyLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation을 지원하지 않는 브라우저입니다.");
      // console.error("Geolocation을 지원하지 않는 브라우저입니다.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        setLatLng({ lat, lng });
      },
      (error) => {
        error;
        // console.error("위치 정보를 가져오는 데 실패했습니다:", error.message);
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
  const setLatLng = useSetAtom(latLngAtom);

  const handleMoveToFestivalLocation = () => {
    setLatLng({
      lat: DEFAULT_LOCATION.lat,
      lng: DEFAULT_LOCATION.lng,
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
