import { useAtom } from "jotai";
import { useMemo } from "react";
import { authAtom, AuthProps } from "@atoms/auth";
import useBoothInfo from "./useBoothInfo";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const navigate = useNavigate();
  const [auth, setAuth] = useAtom(authAtom);
  const { clearBoothInfo } = useBoothInfo();

  const login = ({ accessToken, refreshToken, adminUser }: AuthProps) => {
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    localStorage.setItem("user", JSON.stringify(adminUser));

    setAuth({ accessToken, refreshToken, adminUser });
    navigate("/");
  };

  const logout = () => {
    // localStorage에서 토큰 삭제
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");
    clearBoothInfo();

    setAuth(null);
    navigate("/login");
  };

  const isLogin = useMemo(() => {
    return localStorage.getItem("accessToken") !== null;
  }, []);

  return {
    isLogin,
    auth,
    login,
    logout,
  };
};

export default useAuth;
