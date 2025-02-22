import { atom } from "jotai";

export interface IsLoadingProps {
  isFullLoading: boolean;
}

const initialIsLoading: IsLoadingProps = {
  isFullLoading: false,
};

export const IsLoadingAtom = atom<IsLoadingProps>(initialIsLoading);
