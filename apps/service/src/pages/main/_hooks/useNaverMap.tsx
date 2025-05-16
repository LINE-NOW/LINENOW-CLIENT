import { useCallback, useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";

import { loadScript } from "@utils/loadScript";
import { useAtomValue } from "jotai";
import { DEFAULT_LOCATION, latLngAtom } from "@atoms/location";
import FocusPin from "../_components/map/pin/FocusPin";
import DefautlPin from "../_components/map/pin/DefaultPin";

import { Booth } from "@interfaces/booth";

export interface BoothPinProps
  extends Pick<
    Booth,
    | "boothID"
    | "longitude"
    | "latitude"
    | "operatingStatus"
    | "totalWaitingTeams"
  > {}

export const useNaverMap = (
  mapRef: React.RefObject<HTMLDivElement | null>,
  selectedBoothId: number | null,
  setSelectedBoothId: (id: number | null) => void,
  booths: BoothPinProps[]
) => {
  const markersRef = useRef<Record<number, naver.maps.Marker>>({});
  const latLng = useAtomValue(latLngAtom);
  const mapInstanceRef = useRef<naver.maps.Map | null>(null);
  const [isMapReady, setIsMapReady] = useState<boolean>(false);

  // 마커 렌더 함수 캐싱
  const renderMarkerIcon = useCallback(
    (focus: boolean, props?: React.ComponentProps<typeof DefautlPin>) => {
      const Pin = focus ? <FocusPin /> : props && <DefautlPin {...props} />;
      const container = document.createElement("div");
      createRoot(container).render(Pin);
      return container;
    },
    []
  );

  // 지도 1회 초기화
  useEffect(() => {
    if (isMapReady) return;

    loadScript(
      `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${
        import.meta.env.VITE_NAVER_MAP_KEY
      }`,
      () => {
        if (!window.naver) return;
        const { naver } = window;
        if (mapRef.current && window) {
          const now = new naver.maps.LatLng(
            DEFAULT_LOCATION.lat,
            DEFAULT_LOCATION.lng
          );
          const map = new naver.maps.Map(mapRef.current, {
            center: now,
            zoom: 16,
            zoomControl: true,
            zoomControlOptions: {
              style: window.naver.maps.ZoomControlStyle.SMALL,
              position: window.naver.maps.Position.TOP_RIGHT,
            },
          });

          mapInstanceRef.current = map;
          window.naver.maps.Event.addListener(map, "click", (e: any) => {
            setSelectedBoothId(null);
            map.panTo(e?.latlng);
          });

          setIsMapReady(true);
        }
      }
    );
  }, []);

  const setMarkers = () => {
    if (!isMapReady) return;

    const map = mapInstanceRef.current;

    if (!map || !booths) return;

    // 기존 마커 제거
    Object.values(markersRef.current).forEach((marker) => marker.setMap(null));
    markersRef.current = {};

    // 새 마커 추가
    booths.forEach((booth) => {
      const marker = new window.naver.maps.Marker({
        position: new window.naver.maps.LatLng(
          Number(booth.latitude),
          Number(booth.longitude)
        ),
        map,
        icon: {
          content: renderMarkerIcon(booth.boothID === selectedBoothId, {
            operatingStatus: booth.operatingStatus,
            totalWaitingTeams: booth.totalWaitingTeams,
          }),
        },
      });

      marker.set("boothID", booth.boothID); // 추가 속성 저장

      window.naver.maps.Event.addListener(marker, "click", () => {
        map.panTo(marker.getPosition());
        setSelectedBoothId(booth.boothID);
      });

      markersRef.current[booth.boothID] = marker;
    });
  };

  useEffect(() => {
    setMarkers();
  }, [booths, isMapReady, selectedBoothId]);

  useEffect(() => {
    if (!mapInstanceRef.current) return;
    const map = mapInstanceRef.current;
    const center = map.getCenter();
    if (center.y === latLng.lat && center.x === latLng.lng) return;

    map.panTo(new naver.maps.LatLng(latLng.lat, latLng.lng));
  }, [latLng]);

  return { mapRef };
};
