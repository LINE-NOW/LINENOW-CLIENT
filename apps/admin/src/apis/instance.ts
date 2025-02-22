import axios, { AxiosError } from "axios";

const instance = axios.create({
  // baseURL: "",
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: false, //크로스 도메인 요청 시 쿠키, HTTP 인증 및 클라이언트 SSL 인증서를 사용하도록 허용한다.
});

instance.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("accessToken");

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

interface BaseDTO<T> {
  status: string;
  code: number;
  data: T;
  message: string;
}

interface EmptyDTO {
  status: string;
  code: number;
  message: string;
}

export const getResponse = async <T>(url: string): Promise<T | null> => {
  try {
    const response = await instance.get<BaseDTO<T>>(url);
    console.log(
      `[GET] ${url}
      code: ${response.data.code} (${response.data.status})
      message: ${response.data.message}`
    );

    console.log(response);
    return response.data.data;
  } catch (error) {
    const axiosError = error as AxiosError;

    console.error("Response error:", axiosError);
    if (axiosError.status == 401 || axiosError.status == 403) {
      console.log(
        `[GET] ${url}
        error: accessToken에 문제가 있습니다.`
      );
      // 로그아웃 처리하기
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      history.go(0);
    }
    return null;
  }
};

export const postResponse = async <TRequest, TResponse>(
  url: string,
  data: TRequest
): Promise<TResponse | null> => {
  try {
    console.log(`[POST] ${url}`);
    const response = await instance.post<BaseDTO<TResponse>>(url, data);
    return response.data.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    console.log(`[POST] ${url} - Data:`, data);
    console.error("Response error:", axiosError);
    return null;
  }
};

export const postNoResponse = async <TRequest>(
  url: string,
  requestBody: TRequest
) => {
  try {
    const response = await instance.post<EmptyDTO>(url, requestBody);

    console.log(
      `[POST] ${url}
      code: ${response.data.code} (${response.data.status})
      message: ${response.data.message}`
    );
  } catch (error) {
    const axiosError = error as AxiosError;
    console.log(`[POST] ${url}
      code: ${axiosError.status}`);
    throw axiosError;
  }
};
