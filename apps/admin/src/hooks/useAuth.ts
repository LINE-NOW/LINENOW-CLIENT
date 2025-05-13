import { useAtom, useSetAtom } from "jotai";
import { useMemo } from "react";
import { authAtom, AuthProps } from "@atoms/auth";
import useBoothInfo from "./useBoothInfo";
import { useNavigate } from "react-router-dom";
import { pausedOverlayAtom } from "./useOverlay";

const useAuth = () => {
  const navigate = useNavigate();
  const [auth, setAuth] = useAtom(authAtom);
  const { clearBoothInfo } = useBoothInfo();
  const setShowPausedOverlay = useSetAtom(pausedOverlayAtom);

  const login = ({ accessToken, refreshToken, adminUser }: AuthProps) => {
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    localStorage.setItem("user", JSON.stringify(adminUser));

    setAuth({ accessToken, refreshToken, adminUser });
    if (adminUser.is_restart) {
      setShowPausedOverlay(true);
    }
    navigate("/");
  };

  const logout = () => {
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
