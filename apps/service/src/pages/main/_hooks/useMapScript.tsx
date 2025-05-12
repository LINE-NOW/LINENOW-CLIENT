import { useEffect, useState } from "react";
import { loadScript } from "@utils/loadScript";

export const useMapScript = () => {
  const [isReady, setReady] = useState(false);

  useEffect(() => {
    loadScript(
      `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${
        import.meta.env.VITE_NAVER_MAP_KEY
      }`,
      () => setReady(true)
    );
  }, []);
  return { isReady };
};
