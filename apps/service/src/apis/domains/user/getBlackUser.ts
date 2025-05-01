import { getResponse } from "@apis/instance";

type GetBlackUserResponse = {
  is_blackuser: boolean;
};

export const getBlackUser = async (): Promise<boolean | null> => {
  const response = await getResponse<GetBlackUserResponse>(
    `/api/v1/accounts/blackuser`
  );

  return response?.is_blackuser || null;
};
