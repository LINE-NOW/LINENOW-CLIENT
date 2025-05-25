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

/**
 * 
 *  // screenPosition을 interface에 선언  
  screenPosition?: { x: number; y: number };
}

(...)

this.markers = this.markers.map((marker) => {
        try {
          const lat = marker.position.lat();
          const lng = marker.position.lng();

          // 2. 직접 좌표 변환 로직 구현
          // 마커의 경/위도를 지도 경계 내 상대적 위치(0~1)로 변환
          const relativeX = (lng - minLng) / boundsWidth;
          const relativeY = (maxLat - lat) / boundsHeight; // 위도는 위에서 아래로 감소하므로 반전

          // 상대적 위치를 픽셀 좌표로 변환
          const x = relativeX * mapSize.width;
          const y = relativeY * mapSize.height;

          // 계산된 화면 좌표
          const position = { x, y };

          // 마커 정보 유지하면서 업데이트된 화면 좌표 정보 추가
          return {
            ...marker,
            screenPosition: position,
          };
        } catch (error) {
          // 오류 발생 시 기존 마커 정보 반환
          localConsole?.error(`마커 ${marker.id} 좌표 변환 오류:`, error);
          return marker;
        }
 * 
 * 
 */
