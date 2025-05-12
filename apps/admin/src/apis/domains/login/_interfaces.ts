import { AuthProps } from "@atoms/auth";

export interface LoginRequest {
  manager_code: string;
}

export interface User {
  manager_id: number;
  manager_name: string;
  booth_id: number;
  operating_status: string;
}

export interface LoginResponse {
  access: string;
  refresh: string;
  user: User;
}

export const transformLoginResponse = (
  response: LoginResponse[]
): AuthProps => {
  const { access, refresh, user } = response[0];
  return {
    accessToken: access,
    refreshToken: refresh,
    adminUser: user,
  };
};
