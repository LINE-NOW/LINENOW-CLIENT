import { postResponse } from "@apis/instance";
import { LoginRequest, LoginResponse } from "./_interfaces";

export const postLogin = async (data: LoginRequest): Promise<LoginResponse> => {
  const response = await postResponse<LoginRequest, LoginResponse>(
    "/api/v1/manager/login",
    data
  );
  if (response) {
    return response;
  } else {
    throw new Error("토큰 없음");
  }
};
