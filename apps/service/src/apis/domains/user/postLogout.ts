import { postResponse } from "@apis/instance";

export const postLogout = async () => {
  await postResponse<null, null>(`/api/v1/accounts/logout`, null);
};
