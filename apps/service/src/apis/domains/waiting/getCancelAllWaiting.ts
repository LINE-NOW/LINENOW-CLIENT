// 다른 대기 존재할 경우 대기 취소 정보 get

import { getResponse } from "@apis/instance";

type GetCancelAllWaitingResponse = {
  booth_names: string[];
  count: number;
};

export const getCancelAllWaiting = async (): Promise<string[]> => {
  const response = await getResponse<GetCancelAllWaitingResponse>(
    `/api/v1/waiting/view-waiting`
  );
  if (response === null) return [];
  return response.booth_names;
};
