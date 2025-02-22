import { Waiting } from "@interfaces/waiting";
import { postResponse } from "@apis/instance";
import { transformPostConfirm } from "./_interface";

export interface PostConfirmRequest {
  waitingID: number;
}

export const postEntryConfirm = async ({
  waitingID,
}: PostConfirmRequest): Promise<Omit<
  Waiting,
  "booth" | "partySize"
> | null> => {
  const response = await postResponse(
    `/api/v1/waitings/${waitingID}/confirm`,
    null
  );

  return response ? transformPostConfirm(response) : null;
};
