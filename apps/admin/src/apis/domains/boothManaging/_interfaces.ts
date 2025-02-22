import { Booth } from "@interfaces/booth";
import { BoothStatus, ManagerActionStatus } from "@linenow-types/status";

export interface PostWaitingsActionRequest {
  action: ManagerActionStatus;
}

export interface GetWaitingCountsResponse {
  waiting: number;
  calling: number;
  arrived: number;
  canceled: number;
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
  status: BoothStatus;
}
