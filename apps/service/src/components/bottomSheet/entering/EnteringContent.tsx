import BoothCard from "@components/bottomSheet/entering/boothList/BoothCard";
import SingleEnteringContent from "./SingleEnteringContent";
import MultipleEnteringContent from "./MultipleEnteringContent";
import React from "react";

interface Props {
  enterings: React.ComponentProps<typeof BoothCard>[];
  waitings: React.ComponentProps<typeof BoothCard>[];
}

const EnteringContent = ({ enterings, waitings }: Props) => {
  const isSingleEntering = enterings.length === 1;

  if (isSingleEntering) {
    return (
      <SingleEnteringContent
        waitingID={enterings[0].waitingID ?? 0}
        confirmedAt={enterings[0].confirmedAt}
        isWaiting={waitings.length > 0}
      />
    );
  }

  return <MultipleEnteringContent enterings={enterings} waitings={waitings} />;
};

export default React.memo(EnteringContent, (prevProps, nextProps) => {
  const sameEnterings =
    prevProps.enterings.length === nextProps.enterings.length &&
    prevProps.enterings.every(
      (e, i) => e.waitingID === nextProps.enterings[i].waitingID
    );

  const sameWaitings =
    prevProps.waitings.length === nextProps.waitings.length &&
    prevProps.waitings.every(
      (w, i) => w.waitingID === nextProps.waitings[i].waitingID
    );

  return sameEnterings && sameWaitings;
});
