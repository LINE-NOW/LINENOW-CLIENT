import { getResponse } from "@apis/instance";

// 전체 부스 개수 조회
interface GetUserCountResponse {
  user_count: number;
}

export const getUserCount = async (): Promise<number | null> => {
  const response = await getResponse<GetUserCountResponse>(
    `/api/v1/accounts/user-count`,
    { useAuth: false }
  );
  return response?.user_count || null;
};
