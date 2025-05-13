// 다른 대기 존재할 경우 대기 전체 취소
import { postResponse } from "@apis/instance";

export const postCancelAllWaiting = async () => {
  await postResponse<null, null>(`/api/v1/waiting/cancel-all-waiting`, null);
};
