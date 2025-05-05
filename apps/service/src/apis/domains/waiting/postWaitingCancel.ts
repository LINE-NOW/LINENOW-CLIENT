import { postResponse } from "@apis/instance";

export const postWaitingCancel = async ({
  waiting_id,
}: {
  waiting_id: number;
}) => {
  await postResponse<null, null>(
    `/api/v1/waiting/${waiting_id}/user-cancel`,
    null
  );
};
