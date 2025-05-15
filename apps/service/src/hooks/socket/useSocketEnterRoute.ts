import useEnteringBottomSheet from "@hooks/useEntering";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useSocketEnterRoute = () => {
  const location = useLocation();
  const { openEntering } = useEnteringBottomSheet();

  useEffect(() => {
    openEntering();
  }, [location.pathname]);
};
