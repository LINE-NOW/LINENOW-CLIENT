import { deleteResponse } from "@apis/instance";

export const deleteWithdraw = async () => {
  await deleteResponse<null>(`/api/v1/accounts/withdraw`);
};
