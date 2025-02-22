import { AuthProps } from "@atoms/auth";

export interface LoginRequest {
  admin_code: string; // 고유번호
}

export interface LoginResponse {
  access_token: string;
  refresh_token: string;
}

export const transformLoginResponse = (response: LoginResponse): AuthProps => {
  return {
    accessToken: response.access_token,
    refreshToken: response.refresh_token,
  };
};
