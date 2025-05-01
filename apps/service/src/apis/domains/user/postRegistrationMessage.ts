import { postResponse } from "@apis/instance";
import { getResponse } from "msw";

type PostRegistrationRequestBody = {
  user_phone: string;
};

export const postRegistrationMessage = async (
  body: PostRegistrationRequestBody
) => {
  await postResponse<PostRegistrationRequestBody, null>(
    `/api/v1/accounts/registration/message`,
    body
  );
};
