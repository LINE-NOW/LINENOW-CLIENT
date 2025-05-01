export interface UserToken {
  accessToken: string;
  // refreshToken: string;
}

export interface User {
  userID: number;
  userName: string;
  userPhone: string;
  userPassword?: string;

  noShowCount: number;
  isBlack?: boolean;
}
