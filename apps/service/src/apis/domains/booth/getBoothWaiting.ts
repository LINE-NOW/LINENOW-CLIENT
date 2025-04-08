import { _Booth, _Waiting } from "../models";
import { getResponse } from "@apis/instance";

import { BoothWaiting } from "@interfaces/waiting";

// 부스 상세-대기 정보
type GetBoothWaitingResponse = Pick<
  _Waiting,
  | "booth_id"
  | "waiting_id"
  | "waiting_status"
  | "total_waiting_teams"
  | "waiting_teams_ahead"
  | "confirmed_at"
>;

type GetBoothWaitingResponseReturn = Pick<
  BoothWaiting,
  | "boothID"
  | "waitingID"
  | "waitingStatus"
  | "totalWaitingTeams"
  | "waitingTeamsAhead"
  | "confirmedAt"
>;

const transformBoothWaitingResponse = (
  _response: GetBoothWaitingResponse
): GetBoothWaitingResponseReturn => {
  return {
    boothID: _response.booth_id,
    waitingID: _response.waiting_id,
    waitingStatus: _response.waiting_status,
    totalWaitingTeams: _response.total_waiting_teams,
    waitingTeamsAhead: _response.waiting_teams_ahead,
  };
};

export const getBoothWaiting = async (
  boothID: number
): Promise<GetBoothWaitingResponseReturn | null> => {
  const response = await getResponse<GetBoothWaitingResponse>(
    `/api/v1/booths-waiting/${boothID}`
  );
  if (response === null) return null;
  return transformBoothWaitingResponse(response);
};
