import { BOOTH_QUERY_KEY } from "@apis/domains/booth/queries";
import { useQuery } from "@tanstack/react-query";
import { getBoothList, GetBoothsRequest } from "@apis/domains/booth/apis";

export const useGetBoothList = ({ ...props }: GetBoothsRequest) => {
  return useQuery({
    queryKey: [BOOTH_QUERY_KEY.BOOTHS, props.ordering],
    queryFn: () => getBoothList(props),
  });
};
