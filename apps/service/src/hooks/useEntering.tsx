import { useMemo, useRef, useEffect } from "react";
import { useBottomSheet } from "@linenow/core/hooks";
import { useGetWaitings } from "./apis/waiting";
import { Waiting } from "@interfaces/waiting";
import EnteringContent from "@components/bottomSheet/entering/EnteringContent";
import CancelBottomSheetContent from "@components/bottomSheet/cancel/CancelBottomSheet";

const useEnteringBottomSheet = () => {
  const { data = [] } = useGetWaitings("waiting");
  const { openBottomSheet, closeBottomSheet } = useBottomSheet();
  const pendingEnteringsRef = useRef<Waiting[] | null>(null);

  const waitings = useMemo(
    () => data.filter((w) => w.waitingStatus === "waiting"),
    [data]
  );
  const enterings = useMemo(
    () => data.filter((w) => w.waitingStatus === "entering"),
    [data]
  );

  const sheetContent = (
    <EnteringContent enterings={enterings} waitings={waitings} />
  );

  const openEntering = () => {
    if (enterings.length === 0) return;
    openBottomSheet({ children: sheetContent, isCloseButton: true });
  };

  // 소켓으로 받은 waiting 데이터로 바텀시트에 데이터 넣어서 열기
  const openEnteringWithFullData = (enteringData: Waiting[]) => {
    if (enteringData.length === 0) return;

    const externalSheetContent = (
      <EnteringContent enterings={enteringData} waitings={[]} />
    );

    openBottomSheet({ children: externalSheetContent });
  };

  // 대기 중에 데이터가 들어오면 다시
  useEffect(() => {
    if (pendingEnteringsRef.current && data.length > 0) {
      openEnteringWithFullData(pendingEnteringsRef.current);
      pendingEnteringsRef.current = null;
    }
  }, [data]);

  const openCancelBottomSheet = (waiting: Waiting) => {
    openBottomSheet({
      children: <CancelBottomSheetContent {...waiting} />,
    });
  };

  const closeEntrace = () => closeBottomSheet();

  return {
    openEntering,
    closeEntrace,
    openEnteringWithFullData,
    openCancelBottomSheet,
  };
};

export default useEnteringBottomSheet;
