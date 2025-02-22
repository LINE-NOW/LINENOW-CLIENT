import { Booth } from "@interfaces/booth";
import { atom } from "jotai";

const initialBoothInfo: Booth = {
  // Booth 인터페이스에 필요한 초기 값 지정
  boothID: 0,
  name: "",
  status: "finished",
};

export const BoothInfoAtom = atom<Booth>(initialBoothInfo);
