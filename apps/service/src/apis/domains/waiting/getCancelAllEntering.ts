// (입장 여러개일 때) 입장 대기 전체 취소 get

import { getResponse } from "@apis/instance";

type GetCancelAllEnteringResponse = {
  booth_names: string[];
  count: number;
};

export const getCancelAllEntering = async (): Promise<string[]> => {
  const response = await getResponse<GetCancelAllEnteringResponse>(
    `/api/v1/waiting/view-waiting`
  );
  if (response === null) return [];
  return response.booth_names;
};
