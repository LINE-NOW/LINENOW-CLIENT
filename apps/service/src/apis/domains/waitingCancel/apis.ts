import { EmptyDTO, postResponseNoData } from "@apis/instance";

export interface PostWaitingCancel {
  waitingID: number;
}

// 대기 취소 API 호출 함수
export const postWaitingCancel = async ({
  waitingID,
}: PostWaitingCancel): Promise<EmptyDTO | null> => {
  const response = await postResponseNoData(
    `/api/v1/waitings/${waitingID}/cancel`
  );
  return response;
};
