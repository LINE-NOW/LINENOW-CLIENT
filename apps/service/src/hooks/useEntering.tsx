import { useMemo, useRef, useEffect } from "react";
import { useBottomSheet } from "@linenow/core/hooks";
import { useGetWaitings } from "./apis/waiting";
import useEnteringContent from "@components/bottomSheet/entering/useEnteringContent";
import { Waiting } from "@interfaces/waiting";
//TODO: 대기 취소 바텀시트 머지 후 주석 해제
// import CancelBottomSheetContent from "@components/bottomSheet/cancel/CancelBottomSheet";

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

  const sheetContent = useEnteringContent({
    enterings,
    waitings,
  });

  const openEntering = () => {
    if (enterings.length === 0) return;
    openBottomSheet({ children: sheetContent });
  };

  // 소켓으로 받은 waiting 데이터로 바텀시트에 데이터 넣어서 열기
  const openEnteringWithFullData = (enteringData: Waiting[]) => {
    if (enteringData.length === 0) return;

    const externalSheetContent = useEnteringContent({
      enterings: enteringData,
      waitings: [],
    });

    openBottomSheet({ children: externalSheetContent });
  };

  // 대기 중에 데이터가 들어오면 다시
  useEffect(() => {
    if (pendingEnteringsRef.current && data.length > 0) {
      openEnteringWithFullData(pendingEnteringsRef.current);
      pendingEnteringsRef.current = null;
    }
  }, [data]);

  //TODO: 대기 취소 바텀시트 머지 후 주석 해제
  // const openCancelBottomSheet = (waiting: Waiting) => {
  //   openBottomSheet({
  //     children: <CancelBottomSheetContent {...waiting} />,
  //   });
  // };

  const closeEntrace = () => closeBottomSheet();

  return {
    openEntering,
    closeEntrace,
    openEnteringWithFullData,
    //TODO: 대기 취소 바텀시트 머지 후 주석 해제
    // openCancelBottomSheet,
  };
};

export default useEnteringBottomSheet;
