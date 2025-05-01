import { postResponse } from "@apis/instance";

export const postWithdraw = async () => {
  await postResponse<null, null>(`/api/v1/accounts/withdraw`, null);
};
