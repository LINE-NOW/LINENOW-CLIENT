import axios, { AxiosError } from "axios";

export const instance = axios.create({
  // baseURL: import.meta.env.VITE_BASE_URL,
  baseURL: "",
  withCredentials: false, //크로스 도메인 요청 시 쿠키, HTTP 인증 및 클라이언트 SSL 인증서를 사용하도록 허용한다.
});

instance.interceptors.request.use((config) => {
  // TODO: - accessToken 연결
  const accessToken = localStorage.getItem("accessToken");

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

export interface BaseDTO<T> {
  status: string;
  code: number;
  data: T;
  message: string;
}

export interface EmptyDTO {
  status: string;
  code: number;
  message: string;
}

//GET
export const getResponse = async <TResponse>(
  url: string
): Promise<TResponse | null> => {
  try {
    const response = await instance.get<BaseDTO<TResponse>>(url);
    return response.data.data;
  } catch (error) {
    return null;
  }
};

// POST
export const postResponse = async <TRequest, TResponse>(
  url: string,
  data: TRequest
): Promise<TResponse | null> => {
  try {
    const response = await instance.post<BaseDTO<TResponse>>(url, data);
    return response.data.data;
  } catch (error) {
    return null;
  }
};
