import { QUERY_KEY } from "@hooks/apis/query";
import * as S from "./MainBoothList.styled";
import { Label } from "@linenow/core/components";

import useMainViewType from "@pages/main/_hooks/useMainViewType";
import { useIsFetching, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const MainBoothListHeader = (props: React.PropsWithChildren) => {
  const queryClient = useQueryClient();
  const isFetching = useIsFetching({ queryKey: QUERY_KEY.BOOTHS() });

  queryClient.getQueryData(QUERY_KEY.BOOTHS());

  const [refetchDate, setRefetchDate] = useState<Date>(new Date());

  useEffect(() => {
    setRefetchDate(new Date());
  }, [isFetching]);

  const { children } = props;
  const { viewType } = useMainViewType();

  const getTime = () => {
    const hours = refetchDate.getHours();
    const minutes = refetchDate.getMinutes();
    const seconds = refetchDate.getSeconds();

    const formatted = `${hours}시 ${minutes
      .toString()
      .padStart(2, "0")}분 ${seconds.toString().padStart(2, "0")}초`;

    return formatted;
  };

  return (
    <section css={S.getHeaderWrapperStyle(viewType)}>
      <Label font="body3" color="grayLight">
        {getTime()} 업데이트
      </Label>
      <Label
        font={viewType === "list" ? "head2" : "head3"}
        color="black"
        padding="0 0 0.5rem 0"
      >
        2025년 동국대학교 봄 축제
      </Label>
      {children}
    </section>
  );
};

export default MainBoothListHeader;
