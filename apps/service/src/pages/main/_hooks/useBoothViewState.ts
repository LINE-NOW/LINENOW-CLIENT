import { useAtomValue } from "jotai";
import { selectedBoothAtom } from "@pages/main/_atom/selectedBooth";

export const useBoothViewState = () => {
  const selectedBoothID = useAtomValue(selectedBoothAtom);
  const isBoothSelected = selectedBoothID !== null;
  return { selectedBoothID, isBoothSelected };
};
