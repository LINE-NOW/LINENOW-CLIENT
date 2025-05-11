import { _Booth, _Waiting } from "../models";
import { getResponse } from "@apis/instance";

import { Waiting } from "@interfaces/waiting";

// 대기 상세 페이지-부스정보
type GetWaitingBoothResponse = Pick<
  _Waiting,
  | "waiting_id"
  | "waiting_num"
  | "person_num"
  | "canceled_at"
  | "created_at"
  | "confirmed_at"
  | "canceled_at"
> & {
  booth_info: Pick<
    _Booth,
    | "booth_id"
    | "booth_name"
    | "booth_location"
    | "booth_latitude"
    | "booth_longitude"
    | "thumbnail"
  >;
};

type GetWaitingBoothResponseReturn = Pick<
  Waiting,
  | "waitingID"
  | "wiaitngNum"
  | "personCount"
  | "booth"
  | "createdAt"
  | "confirmedAt"
  | "canceledAt"
  | "enteredAt"
>;

const transformWaitingBoothResponse = (
  _response: GetWaitingBoothResponse
): GetWaitingBoothResponseReturn => {
  return {
    waitingID: _response.waiting_id,
    wiaitngNum: _response.waiting_num,
    personCount: _response.person_num,
    booth: {
      boothID: _response.booth_info.booth_id,
      name: _response.booth_info.booth_name,
      location: _response.booth_info.booth_location,
      longitude: _response.booth_info.booth_longitude,
      latitude: _response.booth_info.booth_latitude,
      thumbnail: _response.booth_info.thumbnail,
    },
    createdAt: _response.canceled_at,
    confirmedAt: _response.confirmed_at,
    enteredAt: "need value",
    canceledAt: _response.canceled_at,
  };
};

export const getWaitingBooth = async (
  waitingID: number
): Promise<GetWaitingBoothResponseReturn | null> => {
  const response = await getResponse<GetWaitingBoothResponse>(
    `/api/v1/waiting-booth/${waitingID}`
  );
  if (response === null) return null;
  return transformWaitingBoothResponse(response);
};
