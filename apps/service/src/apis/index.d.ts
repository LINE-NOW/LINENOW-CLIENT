import "axios";

declare module "axios" {
  export interface AxiosRequestConfig {
    // 권한 인증, accessToken이 필요한 경우를 확인합니다.
    useAuth?: boolean;
  }
}
