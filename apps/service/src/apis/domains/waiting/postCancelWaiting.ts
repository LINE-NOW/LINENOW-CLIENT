// 대기 취소하기(사용자가 취소)

import { postResponse } from "@apis/instance";

export const postCancelWaiting = async (waitingID: number) => {
  await postResponse<null, null>(
    `/api/v1/waiting/${waitingID}/user-cancel`,
    null
  );
};
