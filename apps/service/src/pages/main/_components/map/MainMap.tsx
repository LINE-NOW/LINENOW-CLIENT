import * as S from "./MainMap.styled";
import { useState, useEffect, useRef } from "react";
import { useGetBoothsLocation } from "@hooks/apis/booth";
import { loadScript } from "@utils/loadScript";

const MainMap = ({
  latitude,
  longitude,
}: {
  latitude: number;
  longitude: number;
}) => {
  const { data: locations } = useGetBoothsLocation();

  const [isScriptLoaded, setScriptLoaded] = useState(false);
  const mapRef = useRef<naver.maps.Map | null>(null);

  console.log(locations);

  useEffect(() => {
    if (typeof window.naver === "undefined") {
      loadScript(
        `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${
          import.meta.env.VITE_NAVER_MAP_KEY
        }`
      );
    }
    setScriptLoaded(true);
  }, []);

  useEffect(() => {
    if (!isScriptLoaded) return;

    setTimeout(() => {
      mapRef.current = new naver.maps.Map("map", {
        center: new naver.maps.LatLng(latitude, longitude),
        zoom: 16,
        zoomControl: true,
        zoomControlOptions: {
          style: naver.maps.ZoomControlStyle.SMALL,
          position: naver.maps.Position.TOP_RIGHT,
        },
      });
    }, 500);
  }, [isScriptLoaded, latitude, longitude]);

  return <div id="map" css={S.getWrapper}></div>;
};

export default MainMap;

/**
 *  TODO
 *      new naver.maps.Marker({
        position: new naver.maps.LatLng(latitude, longitude),
        map: mapRef.current,
      });
 */
