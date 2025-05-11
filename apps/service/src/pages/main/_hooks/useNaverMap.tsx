import { useEffect, useRef, useState } from "react";
import { loadScript } from "@utils/loadScript";
import { BoothsLocationType } from "@apis/domains/booth/getBoothsLocation";

export const useNaverMap = (locations: BoothsLocationType | undefined) => {
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
        new naver.maps.Marker({
          position: new naver.maps.LatLng(
            Number(booth.latitude),
            Number(booth.longitude)
          ),
          map,
        });
      });

      mapRef.current = map;
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [isReady, locations]);

  return { mapRef };
};
