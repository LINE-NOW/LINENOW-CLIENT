import { UserToken } from "@interfaces/user";
import { atom } from "jotai";

const getLocalStorageTokens = (): UserToken | null => {
  const accessToken = localStorage.getItem("accessToken");

  if (accessToken) return { accessToken };

  return null;
};

export const authAtom = atom<UserToken | null>(getLocalStorageTokens());
