import { useEffect, useRef, useState } from "react";
import { BoothsLocationType } from "@apis/domains/booth/getBoothsLocation";

import { createRoot } from "react-dom/client";

import { Icon } from "@linenow/core/components";

export const useNaverMap = (
  isReady: boolean,
  locations?: BoothsLocationType,
  lat: number = 37.5584809,
  lon: number = 127.0004067
) => {
  const mapRef = useRef<naver.maps.Map | null>(null);
  const [selectedBoothID, setSelectedBoothID] = useState<number | null>(null);
  const markersRef = useRef<Record<number, naver.maps.Marker>>({});

  useEffect(() => {
    if (!isReady || !locations) return;
    const timeoutId = setTimeout(() => {
      const map = new naver.maps.Map("map", {
        center: new naver.maps.LatLng(lat, lon),
        zoom: 16,
        zoomControl: true,
        zoomControlOptions: {
          style: naver.maps.ZoomControlStyle.SMALL,
          position: naver.maps.Position.TOP_RIGHT,
        },
      });

      const renderMarker = () => {
        const container = document.createElement("div");
        createRoot(container).render(<Icon icon="waiting_pin" />);
        return container;
      };

      const markers: Record<number, naver.maps.Marker> = {};
      locations.forEach((booth) => {
        const container = renderMarker();
        const marker = new naver.maps.Marker({
          position: new naver.maps.LatLng(
            Number(booth.latitude),
            Number(booth.longitude)
          ),
          icon: { content: container },
          map,
        });

        markers[booth.boothID] = marker;

        naver.maps.Event.addListener(marker, "click", () => {
          setSelectedBoothID(booth.boothID);
          map.panTo(marker.getPosition());
        });
      });

      markersRef.current = markers;
      mapRef.current = map;
    }, 300);
    return () => clearTimeout(timeoutId);
  }, [isReady, locations]);

  useEffect(() => {
    if (!locations || !mapRef.current) return;

    locations.forEach((booth) => {
      const marker = markersRef.current[booth.boothID];
      if (!marker) return;

      const container = document.createElement("div");
      const isSelected = booth.boothID === selectedBoothID;
      const iconType = isSelected ? "pin" : "waiting_pin";
      createRoot(container).render(<Icon icon={iconType} />);
      marker.setIcon({ content: container });
    });
  }, [selectedBoothID]);

  return { mapRef };
};
