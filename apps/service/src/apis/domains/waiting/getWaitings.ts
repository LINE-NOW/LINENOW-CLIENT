import { _Booth, _Waiting } from "../models";
import { getResponse } from "@apis/instance";
import { Waiting } from "@interfaces/waiting";

// 나의 대기 리스트 가져오기(대기중)
// 나의 대기 리스트 가져오기(대기 취소 또는 입장완료 된 대기)
type GetWaitingsResponseItem = Pick<
  _Waiting,
  | "waiting_id"
  | "waiting_teams_ahead"
  | "waiting_status"
  | "created_at"
  | "confirmed_at"
  | "canceled_at"
> & {
  booth_info: Pick<
    _Booth,
    "booth_id" | "booth_name" | "booth_location" | "booth_thumbnail"
  >;
};

type GetWaitingsResponse = Array<GetWaitingsResponseItem>;
type GetWaitingsResponseReturnItem = Pick<
  Waiting,
  | "waitingID"
  | "booth"
  | "waitingTeamsAhead"
  | "waitingStatus"
  | "createdAt"
  | "confirmedAt"
  | "canceledAt"
  | "enteredAt"
>;
type GetWaitingsResponseReturn = Array<GetWaitingsResponseReturnItem>;

const transformWaitingsResponse = (
  _response: GetWaitingsResponse
): GetWaitingsResponseReturn => {
  return _response.map(
    (item): GetWaitingsResponseReturnItem => ({
      waitingID: 0,
      booth: {
        boothID: item.booth_info.booth_id,
        name: item.booth_info.booth_location,
        thumbnail: item.booth_info.booth_thumbnail,
        location: item.booth_info.booth_location,
      },
      waitingTeamsAhead: item.waiting_teams_ahead,
      waitingStatus: item.waiting_status,
      createdAt: item.created_at,
      confirmedAt: item.confirmed_at,
      canceledAt: item.canceled_at,
      enteredAt: "need value",
    })
  );
};

export const getWaitings = async (
  type: "waiting" | "finished"
): Promise<GetWaitingsResponseReturn> => {
  const apiURL =
    type === "waiting"
      ? `/api/v1/waiting/my-waiting`
      : `/api/v1/waiting/my-waiting/finished`;

  const response = await getResponse<GetWaitingsResponse>(apiURL);
  if (response === null) return [];
  return transformWaitingsResponse(response);
};
