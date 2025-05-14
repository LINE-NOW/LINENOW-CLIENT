import { Booth } from "@interfaces/booth";
import { BoothStatus, ManagerActionStatus } from "@linenow-types/status";

export interface PostWaitingsActionRequest {
  action: ManagerActionStatus;
}

export interface BoothInfo {
  canceled_team_cnt: number;
  entered_team_cnt: number;
  entering_team_cnt: number;
  waiting_team_cnt: number;
}
export interface GetBoothStatus {
  id: number;
  status: BoothStatus;
  name: string;
}

export const transtromGetBoothStatus = (response: GetBoothStatus): Booth => {
  return {
    boothID: response.id,
    name: response.name,
    status: response.status,
  };
};

export interface PostBoothStatusRequest {
  operating_status: BoothStatus;
}
