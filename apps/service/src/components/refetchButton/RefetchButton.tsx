import { QueryKey, useQueryClient } from "@tanstack/react-query";

// components
import * as S from "./RefetchButton.styled";
import { Button, Icon } from "@linenow/core/components";

interface RefetchButtonProps extends React.ComponentProps<typeof Button> {
  queries: string[][];
}

const RefetchButton = (props: RefetchButtonProps) => {
  const { queries, ...buttonProps } = props;

  const queryClient = useQueryClient();
  const handleRefetch = () => {
    queries.forEach((query) => {
      queryClient.invalidateQueries({ queryKey: query as QueryKey });
    });
  };

  return (
    <Button
      width="auto"
      variant={"outline"}
      css={[S.getStyle()]}
      onClick={handleRefetch}
      {...buttonProps}
    >
      <Icon icon="refresh" color="gray" />
    </Button>
  );
};

export default RefetchButton;
