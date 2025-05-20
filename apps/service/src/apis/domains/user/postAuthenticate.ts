import { postResponse } from "@apis/instance";

import { _User } from "../models";
import { User, UserToken } from "@interfaces/user";

type PostAuthenticateRequestBody = {
  user_phone: string;
  sms_code: string;
};

type PostAuthenticateResponse = {
  access: string;
  user: Pick<_User, "user_id" | "user_name" | "user_phone" | "no_show_num">;
};

type PostAuthenticateResponseReturn = {
  user: User;
} & Pick<UserToken, "accessToken">;

const transformPostAuthenticateResponse = (
  _response: PostAuthenticateResponse
): PostAuthenticateResponseReturn => {
  return {
    accessToken: _response.access,
    user: {
      userID: _response.user.user_id,
      userName: _response.user.user_name,
      userPhone: _response.user.user_phone,
      noShowCount: _response.user.no_show_num,
    },
  };
};

export const postAuthenticate = async (
  body: PostAuthenticateRequestBody
): Promise<PostAuthenticateResponseReturn | null> => {
  const response = await postResponse<
    PostAuthenticateRequestBody,
    Array<PostAuthenticateResponse>
  >(`/api/v1/accounts/authenticate`, body, { useAuth: false });

  if (response === null) return null;
  return transformPostAuthenticateResponse(response[0]);
};
