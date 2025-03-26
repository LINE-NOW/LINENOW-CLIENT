import { Flex, Label } from "@linenow/core/components";

interface SectionTitleProps {
  title: React.ReactNode;
  desciption: React.ReactNode;
}

const SectionTitle = (props: SectionTitleProps) => {
  const { title, desciption } = props;
  return (
    <Flex
      as={"section"}
      direction="column"
      gap="0.5rem"
      padding="0rem 0.25rem 0.5rem 0.25rem"
    >
      <Label as={"h3"} font="head3" color="black" children={title} />
      <Label as={"p"} font="body3" color="gray" children={desciption} />
    </Flex>
  );
};

export default SectionTitle;
