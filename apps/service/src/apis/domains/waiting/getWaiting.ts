import { _Booth, _Waiting } from "../models";
import { getResponse } from "@apis/instance";
import { Booth } from "@interfaces/booth";

import { BoothWaiting } from "@interfaces/waiting";

// 부스 상세-대기 정보
type GetWaitingResponse = Pick<
  _Waiting,
  | "waiting_id"
  | "waiting_status"
  | "waiting_team_ahead"
  | "total_waiting_teams"
  | "confirmed_at"
> & {
  booth_info: Pick<_Booth, "booth_id">;
};

type GetWaitingResponseReturn = Pick<
  BoothWaiting,
  | "boothID"
  | "waitingID"
  | "waitingStatus"
  | "waitingTeamsAhead"
  | "confirmedAt"
> &
  Pick<Booth, "totalWaitingTeams">;

const transformWaitingResponse = (
  _response: GetWaitingResponse
): GetWaitingResponseReturn => {
  return {
    waitingID: _response.waiting_id,
    waitingStatus: _response.waiting_status,
    waitingTeamsAhead: _response.waiting_team_ahead,
    boothID: _response.booth_info.booth_id,
    totalWaitingTeams: _response.total_waiting_teams,
    confirmedAt: _response.confirmed_at,
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
