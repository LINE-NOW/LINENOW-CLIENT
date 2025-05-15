// hooks
import { useEffect, useMemo, useState } from "react";

import { useLocation } from "react-router-dom";
import { useGetWaitings } from "./apis/waiting";

const useEntering = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { data = [], refetch } = useGetWaitings("waiting");

  const waitings = useMemo(
    () => data.filter((w) => w.waitingStatus === "waiting"),
    [data]
  );
  const enterings = useMemo(
    () => data.filter((w) => w.waitingStatus === "entering"),
    [data]
  );

  useEffect(() => {
    refetch();
    openBottomSheet();
  }, [location.pathname, data]);

  const openBottomSheet = () => {
    if (enterings.length !== 0) {
      setIsOpen(true);
    }
  };

  const closeBottomSheet = () => {
    setIsOpen(false);
  };

  return {
    openBottomSheet,
    closeBottomSheet,
    isOpen,
    data,
    waitings,
    enterings,
  };
};

export default useEntering;
