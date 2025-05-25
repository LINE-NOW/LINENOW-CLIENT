import { Booth } from "@interfaces/booth";

import { getResponse } from "@apis/instance";

import { _GDGBooth } from "./models";
import { _Booth } from "@apis/domains/models";

// 부스 리스트(가나다순)-부스 정보
type GetBoothsResponseItem = Pick<
  _Booth,
  | "booth_id"
  | "booth_name"
  | "booth_description"
  | "booth_location"
  | "booth_thumbnail"
> &
  Pick<_GDGBooth, "GDG_id">;

type GetBoothsResponse = Array<GetBoothsResponseItem>;

type GetBoothsResponseItemResponse = Pick<
  Booth,
  "boothID" | "name" | "description" | "location" | "thumbnail"
> & { GDGID: number };

type GetBoothsResponseReturn = Array<GetBoothsResponseItemResponse>;

const transformBoothsResponse = (
  _response: GetBoothsResponse
): GetBoothsResponseReturn => {
  return _response.map(
    (item): GetBoothsResponseItemResponse => ({
      boothID: item.booth_id,
      name: item.booth_name,
      description: item.booth_description,
      location: item.booth_location,
      thumbnail: item.booth_thumbnail,
      GDGID: item.GDG_id,
    })
  );
};

export const getGDGBooths = async (): Promise<GetBoothsResponseReturn> => {
  const response = await getResponse<GetBoothsResponse>(`/api/v1/gdg-booths`, {
    useAuth: false,
  });
  if (response === null) return [];
  return transformBoothsResponse(response);
};
