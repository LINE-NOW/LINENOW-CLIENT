import { atom } from "jotai";

export const DEFAULT_LOCATION = {
  lat: 37.5584809,
  lng: 127.0004067,
};

export const latLngAtom = atom<{
  lat: number;
  lng: number;
}>({
  lat: DEFAULT_LOCATION.lat,
  lng: DEFAULT_LOCATION.lng,
});
