import { _Booth, _Waiting } from "../models";
import { getResponse } from "@apis/instance";

import { BoothWaiting } from "@interfaces/waiting";

// 부스 상세-대기 정보
type GetBoothWaitingResponse = Pick<
  _Waiting,
  | "booth_id"
  | "waiting_id"
  | "waiting_status"
  | "waiting_team_ahead"
  | "confirmed_at"
>;

type GetBoothWaitingResponseReturn = Pick<
  BoothWaiting,
  | "boothID"
  | "waitingID"
  | "waitingStatus"
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
    waitingTeamsAhead: _response.waiting_team_ahead,
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
