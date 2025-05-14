import { atom } from "jotai";

export const latLngAtom = atom<{
  lat: number;
  lon: number;
}>({
  lat: 37.5584809,
  lon: 127.0004067,
});
