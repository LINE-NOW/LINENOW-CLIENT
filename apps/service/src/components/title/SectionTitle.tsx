import { Flex, Label } from "@linenow/core/components";

interface SectionTitleProps {
  title: React.ReactNode;
  description: React.ReactNode;
}

const SectionTitle = (props: SectionTitleProps) => {
  const { title, description } = props;
  return (
    <Flex
      as={"section"}
      direction="column"
      gap="0.5rem"
      padding="0rem 0.25rem 0.5rem 0.25rem"
    >
      <Label as={"h3"} font="head3" color="black" children={title} />
      <Label as={"p"} font="body3" color="gray" children={description} />
    </Flex>
  );
};

export default SectionTitle;
