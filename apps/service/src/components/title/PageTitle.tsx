import { Flex, Label } from "@linenow/core/components";

interface PageTitleProps {
  title: React.ReactNode;
  description?: React.ReactNode;
}

const PageTitle = (props: PageTitleProps) => {
  const { title, description } = props;
  return (
    <Flex
      as={"section"}
      direction="column"
      gap="0.25rem"
      padding="0rem 0.25rem"
    >
      <Label as={"h1"} font="head1" color="black" children={title} />
      <Label
        as={"div"}
        font="body1"
        color="blackLight"
        children={description}
      />
    </Flex>
  );
};

export default PageTitle;
