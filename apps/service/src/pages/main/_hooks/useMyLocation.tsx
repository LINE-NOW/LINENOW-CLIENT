import { useEffect, useState } from "react";

interface Location {
  latitude: number | null;
  longitude: number | null;
  error: string | null;
}

export const useMyLocation = (): Location => {
  const [location, setLocation] = useState<Location>({
    latitude: null,
    longitude: null,
    error: null,
  });

  useEffect(() => {
    if (!navigator.geolocation) {
      setLocation((prev) => ({
        ...prev,
        error: "이 브라우저에서는 위치 정보를 지원하지 않습니다.",
      }));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      (error) => {
        setLocation((prev) => ({
          ...prev,
          error: `위치 정보를 가져오지 못했습니다: ${error.message}`,
        }));
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  }, []);

  return location;
};
