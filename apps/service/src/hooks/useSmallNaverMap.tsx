import { useCallback, useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";

import { loadScript } from "@utils/loadScript";

import { Booth } from "@interfaces/booth";
import FocusPin from "@pages/main/_components/map/pin/FocusPin";

export interface BoothPinProps
  extends Pick<Booth, "boothID" | "longitude" | "latitude"> {}

export const useSmallNaverMap = (
  mapRef: React.RefObject<HTMLDivElement | null>,
  booth: BoothPinProps
) => {
  const mapInstanceRef = useRef<naver.maps.Map | null>(null);
  const [isMapReady, setIsMapReady] = useState<boolean>(false);

  // 마커 렌더 함수 캐싱
  const renderMarkerIcon = useCallback(() => {
    const Pin = <FocusPin />;
    const container = document.createElement("div");
    createRoot(container).render(Pin);
    return container;
  }, []);

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
            Number(booth.latitude),
            Number(booth.longitude)
          );
          const map = new naver.maps.Map(mapRef.current, {
            center: now,
            zoom: 20,
            logoControl: false,
            mapDataControl: false,
            scaleControl: false,
            zoomControl: false,
            draggable: false,
            pinchZoom: false,
            scrollWheel: false,
            keyboardShortcuts: false,
            disableDoubleTapZoom: true,
            disableDoubleClickZoom: true,
            disableTwoFingerTapZoom: true,
            zoomControlOptions: {
              style: window.naver.maps.ZoomControlStyle.SMALL,
              position: window.naver.maps.Position.TOP_RIGHT,
            },
          });
          mapInstanceRef.current = map;
          setIsMapReady(true);
        }
      }
    );
  }, []);

  // 마커 업데이트만 분리 (지도 유지)
  useEffect(() => {
    if (!isMapReady) return;

    const map = mapInstanceRef.current;

    if (!map || !booth) return;

    const marker = new window.naver.maps.Marker({
      position: new window.naver.maps.LatLng(
        Number(booth.latitude),
        Number(booth.longitude)
      ),
      map,
      icon: {
        content: renderMarkerIcon(),
      },
    });

    window.naver.maps.Event.addListener(marker, "click", () => {
      map.panTo(marker.getPosition());
    });
  }, [isMapReady]);
};
