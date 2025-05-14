import { useCallback, useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import { Icon } from "@linenow/core/components";
import { BoothsLocationType } from "@apis/domains/booth/getBoothsLocation";
import { loadScript } from "@utils/loadScript";
import { useAtomValue } from "jotai";
import { latLngAtom } from "@atoms/location";

export const useNaverMap = (
  mapRef: React.RefObject<HTMLDivElement | null>,
  selectedBoothId: number | null,
  setSelectedBoothId: (id: number | null) => void,
  locations?: BoothsLocationType
) => {
  const markersRef = useRef<Record<number, naver.maps.Marker>>({});
  const latLng = useAtomValue(latLngAtom);
  const mapInstanceRef = useRef<naver.maps.Map | null>(null);

  // const [selectedBoothId, setSelectedBoothId] = useAtom(selectedBoothAtom);

  // 마커 렌더 함수 캐싱
  const renderMarkerIcon = useCallback((iconType: "pin" | "waiting_pin") => {
    const container = document.createElement("div");
    createRoot(container).render(<Icon icon={iconType} />);
    return container;
  }, []);

  // 지도 1회 초기화
  useEffect(() => {
    if (mapInstanceRef.current) return;
    loadScript(
      `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${
        import.meta.env.VITE_NAVER_MAP_KEY
      }`,
      () => {
        if (!window.naver) return;
        const { naver } = window;
        if (mapRef.current && window) {
          const now = new naver.maps.LatLng(37.5584809, 127.0004067);
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
        }
      }
    );
  }, []);

  // 마커 업데이트만 분리 (지도 유지)
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map || !locations) return;

    // 기존 마커 제거
    Object.values(markersRef.current).forEach((marker) => marker.setMap(null));
    markersRef.current = {};

    // 새 마커 추가
    locations.forEach((booth) => {
      const marker = new window.naver.maps.Marker({
        map,
        position: new window.naver.maps.LatLng(
          Number(booth.latitude),
          Number(booth.longitude)
        ),
        icon: {
          content: renderMarkerIcon("waiting_pin"), // 최초는 무조건 대기 상태
        },
      });

      marker.set("boothID", booth.boothID); // 추가 속성 저장

      window.naver.maps.Event.addListener(marker, "click", () => {
        map.panTo(marker.getPosition());
        setSelectedBoothId(booth.boothID);
      });

      markersRef.current[booth.boothID] = marker;
    });
  }, [locations]);

  useEffect(() => {
    const markers = markersRef.current;
    Object.entries(markers).forEach(([id, marker]) => {
      const boothID = Number(id);
      const isSelected = boothID === selectedBoothId;

      marker.setIcon({
        content: renderMarkerIcon(isSelected ? "pin" : "waiting_pin"),
      });
    });
  }, [selectedBoothId]);

  useEffect(() => {
    if (!mapInstanceRef.current) return;
    const map = mapInstanceRef.current;
    const center = map.getCenter();
    if (center.y === latLng.lat && center.x === latLng.lon) return;

    map.panTo(new naver.maps.LatLng(latLng.lat, latLng.lon));
  }, [latLng]);

  return { mapRef };
};

// import { useEffect, useLayoutEffect, useRef, useState } from "react";
// import { BoothsLocationType } from "@apis/domains/booth/getBoothsLocation";
// import { createRoot } from "react-dom/client";
// import { Icon } from "@linenow/core/components";
// import { useAtom } from "jotai";
// import { latLngAtom } from "@atoms/location";
// import { selectedBoothAtom } from "../_atom/selectedBooth";
// import { loadScript } from "@utils/loadScript";

// export const useNaverMap = (locations?: BoothsLocationType) => {
//   const mapRef = useRef<naver.maps.Map | null>(null);
//   const markersRef = useRef<Record<number, naver.maps.Marker>>({});

//   const [isReady, setIsReady] = useState(false);
//   const [latLng, setLatLng] = useAtom(latLngAtom);
//   const [selectedBoothId, setSelectedBoothId] = useAtom(selectedBoothAtom);

//   const renderMarkerIcon = (iconType: "pin" | "waiting_pin") => {
//     const container = document.createElement("div");
//     createRoot(container).render(<Icon icon={iconType} />);
//     return container;
//   };

//   useEffect(() => {
//     if (!locations) return;

//     if (!isReady) {
//       loadScript(
//         `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${
//           import.meta.env.VITE_NAVER_MAP_KEY
//         }`,
//         () => {
//           setIsReady(true);
//           if (!window.naver) {
//             console.error("Naver map failed to load.");
//             return;
//           }

//           const map = new window.naver.maps.Map("map", {
//             center: new window.naver.maps.LatLng(latLng.lat, latLng.lon),
//             zoom: 16,
//             zoomControl: true,
//             zoomControlOptions: {
//               style: window.naver.maps.ZoomControlStyle.SMALL,
//               position: window.naver.maps.Position.TOP_RIGHT,
//             },
//           });

//           mapRef.current = map;

//           window.naver.maps.Event.addListener(map, "idle", () => {
//             const center = map.getCenter();
//             setLatLng({ lat: center.y, lon: center.x });
//           });

//           const markers: Record<number, naver.maps.Marker> = {};

//           locations.forEach((booth) => {
//             const marker = new window.naver.maps.Marker({
//               position: new window.naver.maps.LatLng(
//                 Number(booth.latitude),
//                 Number(booth.longitude)
//               ),
//               icon: { content: renderMarkerIcon("waiting_pin") },
//               map,
//             });

//             markers[booth.boothID] = marker;

//             window.naver.maps.Event.addListener(marker, "click", () => {
//               map.panTo(marker.getPosition());

//               setSelectedBoothId(booth.boothID);
//             });
//           });

//           markersRef.current = markers;

//           Object.entries(markers).forEach(([boothIDStr, marker]) => {
//             const boothID = Number(boothIDStr);
//             const iconType =
//               boothID === selectedBoothId ? "pin" : "waiting_pin";
//             marker.setIcon({ content: renderMarkerIcon(iconType) });
//           });
//         }
//       );
//     }
//   }, [locations]);
//   useEffect(() => {
//     if (!mapRef.current) return;
//     const center = mapRef.current.getCenter();
//     if (center.y === latLng.lat && center.x === latLng.lon) return;

//     mapRef.current.panTo(new naver.maps.LatLng(latLng.lat, latLng.lon));
//   }, [latLng]);

//   return { mapRef };
// };
