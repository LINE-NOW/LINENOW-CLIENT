import axios, { AxiosError } from "axios";

export const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  // baseURL: '',
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

//get
export const getResponse = async <T>(url: string): Promise<T | null> => {
  try {
    const response = await instance.get<BaseDTO<T>>(url);

    return response.data.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    if (axiosError.status == 401) {
      // 로그아웃 처리하기
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      history.go(0);
    }
    return null;
  }
};

export const deleteResponse = async (url: string): Promise<EmptyDTO | null> => {
  try {
    const response = await instance.post<BaseDTO<EmptyDTO>>(url);

    return handleResponse(response.data);
  } catch (error) {
    return null;
  }
};

export const postResponseNoData = async (
  url: string
): Promise<EmptyDTO | null> => {
  try {
    const response = await instance.post<BaseDTO<EmptyDTO>>(url, {
      headers: {
        Authorization: `Bearer `,
      },
    });

    return handleResponse(response.data);
  } catch (error) {
    return null;
  }
};

//post
export const postResponse = async <T>(
  url: string,
  body: T
): Promise<T | null> => {
  try {
    const response = await instance.post<BaseDTO<T>>(url, body);

    const data = response.data.data;
    return data;
  } catch (error) {
    return null;
  }
};

// 공통 응답 처리 함수
const handleResponse = <T>(response: BaseDTO<T>): EmptyDTO => {
  return {
    status: response.status,
    message: response.message,
    code: response.code,
  };
};

export const postResponseNew = async <TRequest, TResponse>(
  url: string,
  data: TRequest
): Promise<TResponse | null> => {
  try {
    const response = await instance.post(url, data);

    return response.data;
  } catch (error) {
    return null;
  }
};

export const postNoResponse = async <TRequest>(
  url: string,
  requestBody: TRequest
) => {
  try {
    // const response = await instance.post<EmptyDTO>(url, requestBody);
    await instance.post<EmptyDTO>(url, requestBody);
    // console.log(
    //   `[POST] ${url}
    //   code: ${response.data.code} (${response.data.status})
    //   message: ${response.data.message}`
    // );
  } catch (error) {
    // const axiosError = error as AxiosError;
    // console.log(`[POST] ${url}
    //   code: ${axiosError.status}`);
    // throw axiosError;
  }
};
