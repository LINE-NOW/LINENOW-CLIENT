import axios, { AxiosError } from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: false,
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
    const response = await instance.post<BaseDTO<TResponse>>(url, data);
    console.log(`post : ${url}`, response);
    return response.data.data;
  } catch (error) {
    return null;
  }
};
