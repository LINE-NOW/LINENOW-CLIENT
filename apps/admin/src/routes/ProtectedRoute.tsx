import useAuth from "@hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { isLogin } = useAuth();

  if (!isLogin) {
    // 로그인한 유저가 아닐경우 main page로 돌아감
    alert("로그인이 필요해요!");
    return <Navigate to="/login" replace={true} />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
