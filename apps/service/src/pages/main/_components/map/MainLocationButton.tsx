import { useSetAtom } from "jotai";
import * as S from "./MainLocationButton.styled";
import { Button, Icon } from "@linenow/core/components";
import { DEFAULT_LOCATION, latLngAtom } from "@atoms/location";
import { useToast } from "@linenow/core/hooks";

export const MyLocationButton = ({
  ...buttonProps
}: React.ComponentProps<typeof Button>) => {
  const setLatLng = useSetAtom(latLngAtom);
  const { presentToast } = useToast();

  const isInsideBoundary = (lat: number, lng: number): boolean => {
    const bottomLeft = { lat: 37.55543737120145, lng: 126.9938094180942 };
    const topRight = { lat: 37.56015861201457, lng: 127.00589670324476 };

    return (
      lat >= bottomLeft.lat &&
      lat <= topRight.lat &&
      lng >= bottomLeft.lng &&
      lng <= topRight.lng
    );
  };

  const handleMoveToMyLocation = () => {
    if (!navigator.geolocation) {
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        const inside = isInsideBoundary(lat, lng);

        if (!inside) {
          presentToast("동국대학교 인근에서만 위치 서비스를 제공해요!");
          return;
        }
        setLatLng({ lat, lng });
      },
      (error) => {
        console.log(error);
        presentToast(
          "설정에서 브라우저 위치 서비스 켜기 동의 후 사용해 주세요."
        );
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
