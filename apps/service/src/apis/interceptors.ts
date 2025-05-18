import { ROUTE } from "@constants/route";
import { AxiosError, InternalAxiosRequestConfig } from "axios";

// API요청 전
// access token을 확인하고 header에 포함합니다.
export const checkToken = (config: InternalAxiosRequestConfig) => {
  const accessToken = localStorage.getItem("accessToken");

  // access token 없이 조회 가능한 API인 경우
  if (!config.useAuth && !accessToken) return config;

  if (!accessToken) {
    throw new Error("access token이 없습니다.");
  }

  config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
};

export interface ErrorDTO {
  status: string;
  code: number;
  message: string;
}

// API 요청 후 응답 값 확인

// access token이 잘못된 경우
export const handleTokenError = async (error: AxiosError<ErrorDTO>) => {
  const errorCode = error.response?.data.code;

  if (errorCode === 401) {
    alert("잘못된 접근입니다");
    localStorage.removeItem("accessToken");
    window.location.href = ROUTE.DEFAULT;
  }

  throw error;
};

export const handleAPIError = (error: AxiosError<ErrorDTO>) => {
  throw error.response;
};
