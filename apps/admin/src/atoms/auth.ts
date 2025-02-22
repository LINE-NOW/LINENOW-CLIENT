import { atom } from "jotai";

export interface AuthProps {
  accessToken: string;
  refreshToken: string;
}

const getLocalStorageTokens = (): AuthProps | null => {
  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");

  if (accessToken && refreshToken) {
    return { accessToken, refreshToken };
  }
  return null;
};

export const authAtom = atom<AuthProps | null>(getLocalStorageTokens());
