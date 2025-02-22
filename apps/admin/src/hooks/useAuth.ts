import { useAtom } from "jotai";
import { useMemo } from "react";
import { authAtom, AuthProps } from "@atoms/auth";
import useBoothInfo from "./useBoothInfo";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const navigate = useNavigate();
  const [auth, setAuth] = useAtom(authAtom);
  const { clearBoothInfo } = useBoothInfo();

  const login = ({ accessToken, refreshToken }: AuthProps) => {
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);

    setAuth({ accessToken, refreshToken });
    navigate("/");
  };

  const logout = () => {
    // localStorage에서 토큰 삭제
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    clearBoothInfo();

    setAuth(null);
    navigate("/login");
  };

  const isLogin = useMemo(() => auth != null, [auth]);

  return {
    isLogin,
    auth,
    login,
    logout,
  };
};

export default useAuth;
