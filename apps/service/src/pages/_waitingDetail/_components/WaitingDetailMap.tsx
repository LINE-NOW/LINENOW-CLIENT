import SectionTitle from "@components/title/SectionTitle";
import { Flex } from "@linenow/core/components";

const WaitingDetailMap = () => {
  const sectionStyle: React.ComponentProps<typeof Flex> = {
    as: "section",
    direction: "column",
    gap: "0.5rem",
    padding: "1.25rem 1rem 1.75rem 1rem",
  };

  return (
    <Flex {...sectionStyle}>
      <SectionTitle title={`부스 위치`} />
    </Flex>
  );
};

export default WaitingDetailMap;
