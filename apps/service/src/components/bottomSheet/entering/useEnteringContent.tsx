import BoothCard from "@components/bottomSheet/entering/boothList/BoothCard";
import SingleEnteringContent from "./SingleEnteringContent";
import MultipleEnteringContent from "./MultipleEnteringContent";

interface Props {
  enterings: React.ComponentProps<typeof BoothCard>[];
  waitings: React.ComponentProps<typeof BoothCard>[];
}

const useEnteringContent = ({ enterings, waitings }: Props) => {
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

export default useEnteringContent;
