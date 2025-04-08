import { getResponse } from "@apis/instance";

// 나의 대기 리스트 개수 조회
interface GetWaitingsCountResponse {
  waiting_count: number;
}

export const getWaitingsCount = async (): Promise<number | null> => {
  const response = await getResponse<GetWaitingsCountResponse>(
    `/api/v1/waiting/my-waiting/count`
  );
  return response?.waiting_count || null;
};
