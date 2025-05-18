import { Waiting } from "@interfaces/waiting";
import { WaitingStatus } from "@linenow-types/status";

export interface GetWaitingResponse {
  waiting_id: number;
  waiting_num: number;
  person_num: number;
  waiting_status: WaitingStatus;
  created_at: string;
  confirmed_at?: string;
  canceled_at?: string;
  user_info: User;
}

interface User {
  user_phone: string;
  user_name: string;
}

export interface GetWaitingsResponse extends Array<GetWaitingResponse> {}

export const transformGetWaitingResponse = (
  response: GetWaitingResponse
): Waiting => {
  return {
    waitingID: response.waiting_id,
    waitingNum: response.waiting_num,
    personNum: response.person_num,
    waitingStatus: response.waiting_status,
    createdAt: response.created_at,
    confirmedAt: response.confirmed_at,
    canceledAt: response.canceled_at,

    user: {
      phoneNumber: response.user_info.user_phone,
      name: response.user_info.user_name,
    },
  };
};

export const transformGetWaitingsResponse = (
  response: GetWaitingsResponse
): Waiting[] => {
  return response.map(transformGetWaitingResponse);
};
