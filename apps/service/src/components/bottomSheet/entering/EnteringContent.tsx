import BoothCard from "@components/bottomSheet/entering/boothList/BoothCard";
import SingleEnteringContent from "./SingleEnteringContent";
import MultipleEnteringContent from "./MultipleEnteringContent";
import React from "react";

interface Props {
  enterings: React.ComponentProps<typeof BoothCard>[];
  waitings: React.ComponentProps<typeof BoothCard>[];
}

const EnteringContent = ({ enterings = [], waitings = [] }: Props) => {
  if (enterings.length === 0) return null;

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
  const prevEnterings = prevProps.enterings ?? [];
  const nextEnterings = nextProps.enterings ?? [];
  const prevWaitings = prevProps.waitings ?? [];
  const nextWaitings = nextProps.waitings ?? [];

  const sameEnterings =
    prevEnterings.length === nextEnterings.length &&
    prevEnterings.every((e, i) => e.waitingID === nextEnterings[i].waitingID);

  const sameWaitings =
    prevWaitings.length === nextWaitings.length &&
    prevWaitings.every((w, i) => w.waitingID === nextWaitings[i].waitingID);

  return sameEnterings && sameWaitings;
});
