import { getResponse } from "@apis/instance";

// 전체 부스 개수 조회
interface GetBoothsCountResponse {
  booth_count: number;
}

export const getBoothsCount = async (): Promise<number | null> => {
  const response = await getResponse<GetBoothsCountResponse>(
    `/api/v1/booths/count`,
    { useAuth: false }
  );
  return response?.booth_count || null;
};
