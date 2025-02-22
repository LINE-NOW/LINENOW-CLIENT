import { Waiting } from "@interfaces/waiting";

export interface PostConfirm {
  waiting_id: number;
  waiting_status: "ready_to_confirm";
  ready_to_confirm_at: string;
}

export const transformPostConfirm = (
  response: PostConfirm
): Omit<Waiting, "partySize" | "booth"> => {
  return {
    waitingID: response.waiting_id,
    waitingStatus: response.waiting_status,
    readyToConfirmAt: response.ready_to_confirm_at,
  };
};
