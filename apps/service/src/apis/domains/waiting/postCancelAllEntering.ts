// 입장 차례 대기 전체 취소
import { postResponse } from "@apis/instance";

export const postCancelAllEntering = async () => {
  await postResponse<null, null>(
    `/api/v1/waiting/cancel-all-entering-waiting`,
    null
  );
};
