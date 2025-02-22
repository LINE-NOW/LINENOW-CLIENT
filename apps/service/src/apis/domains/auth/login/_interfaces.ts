import { AuthProps } from '@atoms/auth';

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  access: string;
  refresh: string;
}

export const transformLoginResponse = (response: LoginResponse): AuthProps => {
  return {
    accessToken: response.access,
    refreshToken: response.refresh,
  };
};
