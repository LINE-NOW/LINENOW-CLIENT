import { postResponseNew } from "@apis/instance";
import { SignupRequest, SignupResponse } from "./_interfaces";

export const postSignup = async (
  data: SignupRequest
): Promise<SignupResponse> => {
  const response = await postResponseNew<SignupRequest, SignupResponse>(
    "/api/v1/accounts/registration",
    data
  );

  if (response) {
    return response;
  } else {
    throw new Error("토큰 없음");
  }
};
