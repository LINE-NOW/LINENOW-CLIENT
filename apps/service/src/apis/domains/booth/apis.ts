// api method
import { getResponse } from "@apis/instance";

// types
import { Booth, BoothsElement } from "@interfaces/booth";
import {
  GetBoothResponse,
  GetBoothsResponse,
  transformGetBoothResponse,
  transformgetBoothsResponse,
} from "./_interfaces";

// get booth : - 부스 상세
export interface GetBoothRequest {
  boothID: number;
}

export const getBooth = async ({
  ...props
}: GetBoothRequest): Promise<Booth | null> => {
  const response = await getResponse<GetBoothResponse>(
    `/api/v1/booths/${props.boothID}`
  );

  return response ? transformGetBoothResponse(response) : null;
};

// get booths : - 부스 리스트
export interface GetBoothsRequest {
  ordering: string;
}

export const getBoothList = async ({
  ...props
}: GetBoothsRequest): Promise<BoothsElement[]> => {
  const response = await getResponse<GetBoothsResponse>(
    `/api/v1/booths?ordering=${props.ordering}`
  );

  return response ? transformgetBoothsResponse(response) : [];
};
