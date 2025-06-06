import { Booth } from "@interfaces/booth";
import { _Booth } from "../models";
import { getResponse } from "@apis/instance";

// 부스 리스트(가나다순)-부스 정보
type GetBoothsResponseItem = Pick<
  _Booth,
  | "booth_id"
  | "booth_name"
  | "booth_description"
  | "booth_location"
  | "operating_status"
  | "total_waiting_teams"
  | "booth_thumbnail"
  | "booth_longitude"
  | "booth_latitude"
>;

type GetBoothsResponse = Array<GetBoothsResponseItem>;

type GetBoothsResponseItemResponse = Pick<
  Booth,
  | "boothID"
  | "name"
  | "description"
  | "location"
  | "operatingStatus"
  | "totalWaitingTeams"
  | "thumbnail"
  | "longitude"
  | "latitude"
>;

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
      latitude: item.booth_latitude,
      longitude: item.booth_longitude,
      thumbnail: item.booth_thumbnail,
      operatingStatus: item.operating_status,
      totalWaitingTeams: item.total_waiting_teams,
    })
  );
};

export const getBooths = async (): Promise<GetBoothsResponseReturn> => {
  const response = await getResponse<GetBoothsResponse>(`/api/v1/booths`, {
    useAuth: false,
  });
  if (response === null) return [];
  return transformBoothsResponse(response);
};
