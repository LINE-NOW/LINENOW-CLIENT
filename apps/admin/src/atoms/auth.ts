import { User } from "@apis/domains/login/_interfaces";
import { atom } from "jotai";

export interface AuthProps {
  accessToken: string;
  refreshToken: string;
  adminUser: User;
}

// undefined: 아직 로딩 안 됨 / null: 비로그인 / AuthProps: 로그인됨
type AuthState = AuthProps | null | undefined;

const getLocalStorageTokens = (): AuthProps | null => {
  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");
  const user = localStorage.getItem("user");

  if (accessToken && refreshToken && user) {
    try {
      return {
        accessToken,
        refreshToken,
        adminUser: JSON.parse(user),
      };
    } catch (error) {
      console.error("user 파싱 실패", error);
    }
  }
  return null;
};

// export const authAtom = atom<AuthState>(undefined);
export const authAtom = atom<AuthState>(getLocalStorageTokens());

// 마운트 시 localStorage에서 user 정보 가져옴
// authAtom.onMount = (set) => {
//   const tokens = getLocalStorageTokens();
//   set(tokens);
// };
