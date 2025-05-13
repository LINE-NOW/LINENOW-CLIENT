import { Flex } from "@linenow/core/components";
import { PropsWithChildren } from "react";

interface BoothListProps extends PropsWithChildren {}
const BoothList = (props: BoothListProps) => {
  const { children } = props;

  return <Flex direction="column">{children}</Flex>;
};

export default BoothList;
