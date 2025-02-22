import { postNoResponse } from '../../../instance';
import { DeleteIDRequest } from './_interfaces';

export const postDeleteID = async (resquestBody: DeleteIDRequest) => {
  try {
    await postNoResponse<DeleteIDRequest>(
      '/api/v1/accounts/withdraw',
      resquestBody
    );
  } catch (error) {
    // TODO: -분기처리 세세하게
    throw error;
  }
};
