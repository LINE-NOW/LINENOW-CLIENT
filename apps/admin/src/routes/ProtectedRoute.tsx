import useAuth from "@hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const ProtectedRoute = () => {
  const { isLogin } = useAuth();
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const alertedRef = useRef(false);

  useEffect(() => {
    if (!isLogin && !alertedRef.current) {
      alertedRef.current = true;
      alert("로그인이 필요해요!");
      setShouldRedirect(true);
    }
  }, [isLogin]);

  if (shouldRedirect) {
    return <Navigate to="/login" replace />;
  }

  if (!isLogin) {
    // 아직 알림도 안 띄운 상태에서는 일단 null
    return null;
  }

  return <Outlet />;
};

export default ProtectedRoute;
