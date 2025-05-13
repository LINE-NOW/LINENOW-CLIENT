import { useEffect, useRef } from "react";
import { BoothsLocationType } from "@apis/domains/booth/getBoothsLocation";
import { createRoot } from "react-dom/client";
import { Icon } from "@linenow/core/components";
import { useAtom } from "jotai";
import { latLngAtom } from "@atoms/location";
import { selectedBoothAtom } from "../_atom/selectedBooth";

export const useNaverMap = (
  isReady: boolean,
  locations?: BoothsLocationType
) => {
  const mapRef = useRef<naver.maps.Map | null>(null);
  const markersRef = useRef<Record<number, naver.maps.Marker>>({});

  const [latLng, setLatLng] = useAtom(latLngAtom);
  const [selectedBoothId, setSelectedBoothId] = useAtom(selectedBoothAtom);

  const renderMarkerIcon = (iconType: "pin" | "waiting_pin") => {
    const container = document.createElement("div");
    createRoot(container).render(<Icon icon={iconType} />);
    return container;
  };

  useEffect(() => {
    if (!isReady || !locations) return;

    const map = new naver.maps.Map("map", {
      center: new naver.maps.LatLng(latLng.lat, latLng.lon),
      zoom: 16,
      zoomControl: true,
      zoomControlOptions: {
        style: naver.maps.ZoomControlStyle.SMALL,
        position: naver.maps.Position.TOP_RIGHT,
      },
    });

    naver.maps.Event.addListener(map, "idle", () => {
      const center = map.getCenter();
      setLatLng({
        lat: center.y,
        lon: center.x,
      });
    });

    const markers: Record<number, naver.maps.Marker> = {};

    locations.forEach((booth) => {
      const marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(
          Number(booth.latitude),
          Number(booth.longitude)
        ),
        icon: {
          content: renderMarkerIcon(
            booth.boothID === selectedBoothId ? "pin" : "waiting_pin"
          ),
        },
        map,
      });

      markers[booth.boothID] = marker;

      naver.maps.Event.addListener(marker, "click", () => {
        // 마커 클릭 시 상태 업데이트 전에 아이콘 변경
        if (selectedBoothId && markers[selectedBoothId]) {
          markers[selectedBoothId].setIcon({
            content: renderMarkerIcon("waiting_pin"),
          });
        }
        marker.setIcon({ content: renderMarkerIcon("pin") });

        setSelectedBoothId(booth.boothID);
        map.panTo(marker.getPosition());
      });
    });

    mapRef.current = map;
    markersRef.current = markers;
  }, [isReady, locations]);

  // latLng 변경 시에만 맵 이동
  useEffect(() => {
    if (!mapRef.current) return;
    mapRef.current.panTo(new naver.maps.LatLng(latLng.lat, latLng.lon));
  }, [latLng]);

  return { mapRef };
};
