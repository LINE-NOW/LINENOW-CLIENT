import EnteranceBottomSheetContent from "@components/bottomSheet/entrance/EnteraceBottomSheetContent";
import MultipleEnteranceBottomSheetContent from "@components/bottomSheet/entrance/MultipleEnteraceBottomSheetContent";
import { useBottomSheet } from "@linenow/core/hooks";
import { useEffect, useState } from "react";
import { useGetWaitings } from "./apis/waiting";

const useEntranceBottomSheet = () => {
  const { data = [] } = useGetWaitings("waiting");
  const [waitings, setWaitings] = useState<typeof data>([]);
  const [enterings, setEnterings] = useState<typeof data>([]);

  useEffect(() => {
    const newWaitings = data.filter(
      (waiting) => waiting.waitingStatus === "waiting"
    );
    const newEnterings = data.filter(
      (waiting) => waiting.waitingStatus === "entering"
    );

    setWaitings(newWaitings);
    setEnterings(newEnterings);

    console.log(newEnterings);
  }, [data]);

  //  바텀시트 관리
  const content =
    enterings.length === 1 ? (
      <EnteranceBottomSheetContent
        enteringID={enterings[0].waitingID}
        hasOtherWaitings={waitings.length > 0}
      />
    ) : (
      <MultipleEnteranceBottomSheetContent enterings={[]} waitings={[]} />
    );

  const { openBottomSheet, closeBottomSheet } = useBottomSheet();

  const openEntrance = () => openBottomSheet({ children: content });
  const closeEntrace = () => closeBottomSheet();

  return { openEntrance, closeEntrace };
};

export default useEntranceBottomSheet;
