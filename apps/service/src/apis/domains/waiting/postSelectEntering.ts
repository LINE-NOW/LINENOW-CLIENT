// (입장 여러개일 때) 대기 확정

import { postResponse } from "@apis/instance";

export const postSelectEntering = async (waitingID: number) => {
  await postResponse<null, null>(
    `/api/v1/waiting/${waitingID}/waiting-select`,
    null
  );
};
