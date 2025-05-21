import { QueryKey, useIsFetching, useQueryClient } from "@tanstack/react-query";

// components
import * as S from "./RefetchButton.styled";
import { Button, Icon } from "@linenow/core/components";

interface RefetchButtonProps extends React.ComponentProps<typeof Button> {
  queries: QueryKey[];
}

const useQueriesAreFetching = (queries: QueryKey[]): boolean => {
  return queries
    .map((queryKey) => useIsFetching({ queryKey }))
    .some((count) => count > 0);
};

const RefetchButton = (props: RefetchButtonProps) => {
  const { queries, ...buttonProps } = props;

  const queryClient = useQueryClient();
  const isFetching = useQueriesAreFetching(queries);

  const handleRefetch = !isFetching
    ? () =>
        queries.forEach((queryKey) => {
          queryClient.refetchQueries({ queryKey });
        })
    : undefined;

  return (
    <Button
      width="auto"
      variant={"outline"}
      css={[S.getStyle()]}
      onClick={handleRefetch}
      disabled={isFetching}
      {...buttonProps}
    >
      <Icon
        icon="refresh"
        color="gray"
        css={isFetching && S.getSpinAnimation()}
      />
    </Button>
  );
};

export default RefetchButton;
