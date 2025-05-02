import { postResponse } from "@apis/instance";

import { _User } from "../models";
import { User, UserToken } from "@interfaces/user";

type PostLoginRequestBody = {
  user_phone: string;
  user_password: string;
};

type PostLoginResponse = {
  access: string;
  user: Pick<_User, "user_id" | "user_name" | "user_phone" | "no_show_num">;
};

type PostLoginResponseReturn = {
  user: User;
} & Pick<UserToken, "accessToken">;

const transformPostLoginResponse = (
  _response: PostLoginResponse
): PostLoginResponseReturn => {
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

export const postLogin = async (
  body: PostLoginRequestBody
): Promise<PostLoginResponseReturn | null> => {
  const response = await postResponse<
    PostLoginRequestBody,
    Array<PostLoginResponse>
  >(`/api/v1/accounts/login`, body);

  if (response === null) return null;
  return transformPostLoginResponse(response[0]);
};
