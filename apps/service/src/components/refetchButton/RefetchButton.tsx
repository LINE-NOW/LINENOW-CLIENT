import { SerializedStyles } from "@emotion/react";
import * as S from "./RefetchButton.styled";
import { Button, Icon } from "@linenow/core/components";
import { QueryKey, useQueryClient } from "@tanstack/react-query";

interface RefetchButtonProps {
  queries: string[][];
}

// 부스 목록 + 대기 정보 새로 고침
const RefetchButton = (props: RefetchButtonProps) => {
  const { queries = [] } = props;

  const queryClient = useQueryClient();
  const handleRefetch = () => {
    queries.forEach((query) => {
      console.log(query);
      queryClient.invalidateQueries({ queryKey: query as QueryKey });
    });
  };

  return (
    <Button
      width="auto"
      variant={"outline"}
      css={[S.getStyle(), S.getBottomButtonStyle()]}
      onClick={handleRefetch}
    >
      <Icon icon="refresh" color="gray" />
    </Button>
  );
};

export default RefetchButton;
