import useAuth from "@hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

const GuestRoute = () => {
  const { isLogin } = useAuth();

  if (isLogin) {
    return <Navigate to="/" replace={true} />;
  }

  return <Outlet />;
};

export default GuestRoute;
