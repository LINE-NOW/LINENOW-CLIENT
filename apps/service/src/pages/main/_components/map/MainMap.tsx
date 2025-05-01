// import { useState, useEffect } from "react";
// import * as S from "./MainMap.styled";

// let mapInstance: naver.maps.Map | undefined;

// const loadScript = (src: string, callback: () => void) => {
//   if (document.querySelector(`script[src="${src}"]`)) {
//     callback();
//     return;
//   }
//   const script = document.createElement("script");
//   script.type = "text/javascript";
//   script.src = src;
//   script.onload = () => {
//     callback();
//   };
//   document.head.appendChild(script);
// };

// const MainMap = ({
//   latitude,
//   longitude,
// }: {
//   latitude: number;
//   longitude: number;
// }) => {
//   const [isScriptLoaded, setScriptLoaded] = useState(false);

//   useEffect(() => {
//     if (typeof window.naver !== "undefined") {
//       setScriptLoaded(true);
//     } else {
//       loadScript(
//         `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${
//           import.meta.env.VITE_NAVER_MAP_KEY
//         }`,
//         () => setScriptLoaded(true)
//       );
//     }
//   }, []);

//   useEffect(() => {
//     if (isScriptLoaded) {
//       setTimeout(() => {
//         mapInstance = new naver.maps.Map("map", {
//           center: new naver.maps.LatLng(latitude, longitude),
//           zoom: 16,
//           zoomControl: true,
//           zoomControlOptions: {
//             style: naver.maps.ZoomControlStyle.SMALL,
//             position: naver.maps.Position.TOP_RIGHT,
//           },
//         });

//         // new naver.maps.Marker({
//         //   position: new naver.maps.LatLng(latitude, longitude),
//         //   map: mapInstance,
//         // });
//       }, 500);
//     }
//   }, [isScriptLoaded, latitude, longitude]);

//   return <div id="map" css={S.getWrapper}></div>;
// };

// export default MainMap;
