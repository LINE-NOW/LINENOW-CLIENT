import { useEffect, useRef } from "react";
import { BoothsLocationType } from "@apis/domains/booth/getBoothsLocation";

import { createRoot } from "react-dom/client";

import { Icon } from "@linenow/core/components";
import { useAtom, useAtomValue } from "jotai";
import { latLngAtom } from "@atoms/location";
import { selectedBoothAtom } from "../_atom/selectedBooth";

export const useNaverMap = (
  isReady: boolean,
  locations?: BoothsLocationType
) => {
  const mapRef = useRef<naver.maps.Map | null>(null);
  const [selectedBoothID, setSelectedBoothID] = useAtom(selectedBoothAtom);
  const markersRef = useRef<Record<number, naver.maps.Marker>>({});
  const latLng = useAtomValue(latLngAtom);

  useEffect(() => {
    if (!isReady || !locations) return;
    const timeoutId = setTimeout(() => {
      const map = new naver.maps.Map("map", {
        center: new naver.maps.LatLng(latLng.lat, latLng.lon),
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

  useEffect(() => {
    if (!mapRef.current || latLng.lat === null || latLng.lon === null) return;

    const newCenter = new naver.maps.LatLng(latLng.lat, latLng.lon);
    mapRef.current.panTo(newCenter);
  }, [latLng.lat, latLng.lon]);

  return { mapRef };
};
