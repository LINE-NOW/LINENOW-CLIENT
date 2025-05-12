// hooks
import { useMemo } from "react";
import { useBottomSheet } from "@linenow/core/hooks";
import { useGetWaitings } from "./apis/waiting";
import useEnteranceContent from "@components/bottomSheet/entering/useEnteraceContent";

// components

const useEnteringBottomSheet = () => {
  const { data = [] } = useGetWaitings("waiting");

  const waitings = useMemo(
    () => data.filter((w) => w.waitingStatus === "waiting"),
    [data]
  );
  const enterings = useMemo(
    () => data.filter((w) => w.waitingStatus === "entering"),
    [data]
  );

  const sheetContent = useEnteranceContent({
    enterings,
    waitings,
  });

  const { openBottomSheet, closeBottomSheet } = useBottomSheet();

  const openEntering = () => {
    if (enterings.length === 0) return;
    openBottomSheet({ children: sheetContent });
  };

  const closeEntrace = () => closeBottomSheet();

  return { openEntering, closeEntrace };
};

export default useEnteringBottomSheet;
