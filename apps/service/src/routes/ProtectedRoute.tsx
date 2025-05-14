import useAuth from "@hooks/useAuth";

import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { isLogin } = useAuth();

  // if (!isLogin) {
  //   // 로그인한 유저가 아닐경우 main page로 돌아감
  //   return <Navigate to="/" replace={true} />;
  // }

  return <Outlet />;
};

export default ProtectedRoute;
