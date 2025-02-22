import { AuthProps } from '@atoms/auth';

export interface SignupRequest {
  name: string;
  phone_number: string;
  password1: string;
  password2: string;
  turnstile_token: string;
}

export interface SignupResponse {
  access: string;
  refresh: string;
}

export const transformSignupResponse = (
  response: SignupResponse
): AuthProps => {
  return {
    accessToken: response.access,
    refreshToken: response.refresh,
  };
};
