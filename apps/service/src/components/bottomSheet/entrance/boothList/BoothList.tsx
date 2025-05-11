import { Flex } from "@linenow/core/components";
import BoothCard from "./BoothCard";

interface BoothListProps {
  waitings: React.ComponentProps<typeof BoothCard>[];
  enterings: React.ComponentProps<typeof BoothCard>[];
}
const BoothList = (props: BoothListProps) => {
  const { waitings, enterings } = props;

  return (
    <Flex direction="column">
      {enterings.map((waiting, index) => (
        <BoothCard
          key={index}
          boothID={waiting.boothID}
          thumbnail={waiting.thumbnail}
          name={waiting.name}
          location={waiting.location}
        />
      ))}
      {waitings.map((waiting, index) => (
        <BoothCard
          key={index}
          boothID={waiting.boothID}
          thumbnail={waiting.thumbnail}
          name={waiting.name}
          location={waiting.location}
        />
      ))}
    </Flex>
  );
};

export default BoothList;
