import { _Booth, _Waiting } from "../models";
import { getResponse } from "@apis/instance";
import { BoothWaiting } from "@interfaces/waiting";

// 부스 리스트(가나다순)-대기 정보
type GetBoothsWaitingResponseItem = Pick<
  _Waiting,
  "booth_id" | "waiting_id" | "waiting_status" | "total_waiting_teams"
>;
type GetBoothsWaitingResponse = Array<GetBoothsWaitingResponseItem>;

type GetBoothsWaitingResponseReturnItem = Pick<
  BoothWaiting,
  "boothID" | "waitingID" | "waitingStatus" | "totalwaitingTeams"
>;
type GetBoothsWaitingResponseReturn = Array<GetBoothsWaitingResponseReturnItem>;

const transformBoothsWaitingResponse = (
  _response: GetBoothsWaitingResponse
): GetBoothsWaitingResponseReturn => {
  return _response.map(
    (item): GetBoothsWaitingResponseReturnItem => ({
      boothID: item.booth_id,
      waitingID: item.waiting_id,
      waitingStatus: item.waiting_status,
      totalwaitingTeams: item.total_waiting_teams,
    })
  );
};

export const getBoothsWaiting =
  async (): Promise<GetBoothsWaitingResponseReturn> => {
    const response = await getResponse<GetBoothsWaitingResponse>(
      `/api/v1/booths-waiting`
    );
    if (response === null) return [];
    return transformBoothsWaitingResponse(response);
  };
