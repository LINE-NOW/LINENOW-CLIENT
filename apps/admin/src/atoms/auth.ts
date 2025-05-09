import { User } from "@apis/domains/login/_interfaces";
import { atom } from "jotai";

export interface AuthProps {
  accessToken: string;
  refreshToken: string;
  adminUser: User;
}

const getLocalStorageTokens = (): AuthProps | null => {
  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");

  if (accessToken && refreshToken) {
    return { accessToken, refreshToken, adminUser: {} as User };
  }
  return null;
};

export const authAtom = atom<AuthProps | null>(getLocalStorageTokens());
