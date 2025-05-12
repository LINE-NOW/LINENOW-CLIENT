import { useEffect, useRef, useState } from "react";
import { loadScript } from "@utils/loadScript";
import { BoothsLocationType } from "@apis/domains/booth/getBoothsLocation";
import { createRoot } from "react-dom/client";
import { Icon } from "@linenow/core/components";

export const useNaverMap = (locations?: BoothsLocationType) => {
  const mapRef = useRef<naver.maps.Map | null>(null);
  const [isReady, setReady] = useState(false);

  useEffect(() => {
    loadScript(
      `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${
        import.meta.env.VITE_NAVER_MAP_KEY
      }`,
      () => setReady(true)
    );
  }, []);

  useEffect(() => {
    if (!isReady || !locations) return;

    const timeoutId = setTimeout(() => {
      const map = new naver.maps.Map("map", {
        center: new naver.maps.LatLng(37.5584809, 127.0004067),
        zoom: 16,
        zoomControl: true,
        zoomControlOptions: {
          style: naver.maps.ZoomControlStyle.SMALL,
          position: naver.maps.Position.TOP_RIGHT,
        },
      });
      locations.forEach((booth) => {
        const container = document.createElement("div");
        createRoot(container).render(<Icon icon="pin" />);
        const marker = new naver.maps.Marker({
          position: new naver.maps.LatLng(
            Number(booth.latitude),
            Number(booth.longitude)
          ),
          icon: {
            content: container,
          },
          map,
        });
        naver.maps.Event.addListener(marker, "click", () => {
          map.setCenter(marker.getPosition());
        });
      });

      mapRef.current = map;
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [isReady, locations]);

  return { mapRef };
};
