import { postResponseNew } from '@apis/instance';
import { LoginRequest, LoginResponse } from './_interfaces';

export const postLogin = async (data: LoginRequest): Promise<LoginResponse> => {
  const response = await postResponseNew<LoginRequest, LoginResponse>(
    '/api/v1/accounts/login',
    data
  );

  if (response) {
    return response;
  } else {
    throw new Error('토큰 없음');
  }
};
