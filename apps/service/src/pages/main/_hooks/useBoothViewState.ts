import { useAtomValue } from "jotai";
import { isSelectedBoothAtom } from "@pages/main/_atom/selectedBooth";

export const useBoothViewState = () => {
  const selectedBoothID = useAtomValue(isSelectedBoothAtom);
  const isBoothSelected = selectedBoothID !== null;
  return { selectedBoothID, isBoothSelected };
};
