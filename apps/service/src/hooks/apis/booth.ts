import { useQuery } from "@tanstack/react-query";

import { BOOTH_QUERY_KEY } from "@apis/domains/booth/queries";
import { getBooth, GetBoothRequest } from "@apis/domains/booth/apis";

export const useGetBooth = ({ ...props }: GetBoothRequest) => {
  return useQuery({
    queryKey: [BOOTH_QUERY_KEY.BOOTH, props.boothID],
    queryFn: () => getBooth(props),
  });
};
