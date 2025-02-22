import { postNoResponse } from "@apis/instance";
import { LogoutRequest } from "./_interfaces";

// 로그아웃 API 호출 함수
export const postLogout = async (resquestBody: LogoutRequest) => {
  try {
    await postNoResponse<LogoutRequest>("/api/v1/manager/logout", resquestBody);
  } catch (error) {
    // TODO: -분기처리 세세하게
    throw error;
  }
};
