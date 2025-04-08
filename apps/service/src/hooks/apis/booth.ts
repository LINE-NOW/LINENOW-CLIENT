import { useQuery } from "@tanstack/react-query";

import { BOOTH_QUERY_KEY } from "@apis/domains/booth/queries";
import { getBooth } from "@apis/domains/booth/apis";

export const useGetBooth = (boothID: number) => {
  return useQuery({
    queryKey: [BOOTH_QUERY_KEY.BOOTH, boothID],
    queryFn: () => getBooth(boothID),
  });
};
