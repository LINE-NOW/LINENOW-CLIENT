import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { checkToken, handleAPIError, handleTokenError } from "./interceptors";

export const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: false,
  useAuth: true,
});

// API 요청 전
instance.interceptors.request.use(checkToken);

// API 요청 후 에러 핸들링
instance.interceptors.response.use((response) => response, handleTokenError);
instance.interceptors.response.use((response) => response, handleAPIError);

export interface BaseDTO<T> {
  status: string;
  code: number;
  data: T;
  message: string;
}

//GET
export const getResponse = async <TResponse>(
  url: string,
  config?: AxiosRequestConfig
): Promise<TResponse | null> => {
  try {
    const response = await instance.get<BaseDTO<TResponse>>(url, {
      ...config,
    });
    console.log(`get : ${url}`, response);
    return response.data.data;
  } catch (error) {
    throw error as AxiosError;
  }
};

// POST
export const postResponse = async <TRequest, TResponse>(
  url: string,
  data: TRequest,
  config?: AxiosRequestConfig
): Promise<TResponse | null> => {
  try {
    const response = await instance.post<BaseDTO<TResponse>>(url, data, {
      ...config,
    });
    console.log(`post : ${url}`, response);
    return response.data.data;
  } catch (error) {
    throw error as AxiosError;
  }
};
