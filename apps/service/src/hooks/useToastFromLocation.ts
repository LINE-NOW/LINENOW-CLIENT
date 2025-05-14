import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const useToastFromLocation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    if (location.state?.showToast) {
      setShowToast(true);
      setToastMessage(location.state.toastMessage || "");

      // state 초기화해서 새로고침 시 다시 뜨는 것 방지
      navigate(location.pathname, {
        replace: true,
        state: {},
      });
    }
  }, [location.state, location.pathname, navigate]);

  return { showToast, toastMessage };
};

export default useToastFromLocation;
