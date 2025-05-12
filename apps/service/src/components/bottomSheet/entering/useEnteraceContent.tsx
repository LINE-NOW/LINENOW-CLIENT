import BoothCard from "@components/bottomSheet/entering/boothList/BoothCard";
import SingleEnteranceContent from "./SingleEnteranceContent";
import MultipleEnteranceContent from "./MultipleEnteranceContent";

interface Props {
  enterings: React.ComponentProps<typeof BoothCard>[];
  waitings: React.ComponentProps<typeof BoothCard>[];
}

const useEnteranceContent = ({ enterings, waitings }: Props) => {
  const isSingleEntering = enterings.length === 1;

  if (isSingleEntering) {
    return (
      <SingleEnteranceContent
        waitingID={enterings[0].waitingID ?? 0}
        confirmedAt={enterings[0].confirmedAt}
        isWaiting={waitings.length > 0}
      />
    );
  }

  return <MultipleEnteranceContent enterings={enterings} waitings={waitings} />;
};

export default useEnteranceContent;
