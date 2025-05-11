import { _Booth, _Waiting } from "../models";
import { getResponse } from "@apis/instance";

import { BoothWaiting } from "@interfaces/waiting";

// 부스 상세-대기 정보
type GetWaitingResponse = Pick<
  _Waiting,
  "waiting_id" | "waiting_status" | "waiting_team_ahead"
> & {
  booth_info: Pick<_Booth, "booth_id"> & Pick<_Waiting, "total_waiting_teams">;
};

type GetWaitingResponseReturn = Pick<
  BoothWaiting,
  | "boothID"
  | "waitingID"
  | "waitingStatus"
  | "waitingTeamsAhead"
  | "totalwaitingTeams"
>;

const transformWaitingResponse = (
  _response: GetWaitingResponse
): GetWaitingResponseReturn => {
  return {
    waitingID: _response.waiting_id,
    waitingStatus: _response.waiting_status,
    waitingTeamsAhead: _response.waiting_team_ahead,
    totalwaitingTeams: _response.booth_info.total_waiting_teams,
    boothID: _response.booth_info.booth_id,
  };
};

export const getWaiting = async (
  boothID: number
): Promise<GetWaitingResponseReturn | null> => {
  const response = await getResponse<GetWaitingResponse>(
    `/api/v1/waiting/${boothID}`
  );
  if (response === null) return null;
  return transformWaitingResponse(response);
};
