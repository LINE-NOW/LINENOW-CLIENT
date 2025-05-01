import { User, UserToken } from "@interfaces/user";
import { _User } from "../models";
import { postResponse } from "@apis/instance";

type PostRegistrationRequestBody = {
  userName: string;
  userPhone: string;
  sms_code: string;
  user_password1: string;
  user_password2: string;
};

type PostRegistrationResponse = {
  access: string;
  user: Pick<_User, "user_id" | "user_name" | "user_phone" | "no_show_num">;
};

type PostRegistrationResponseReturn = {
  user: User;
} & Pick<UserToken, "accessToken">;

const transformPostRegistrationResponse = (
  _response: PostRegistrationResponse
): PostRegistrationResponseReturn => {
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

export const postRegistration = async (
  body: PostRegistrationRequestBody
): Promise<PostRegistrationResponseReturn | null> => {
  const response = await postResponse<
    PostRegistrationRequestBody,
    PostRegistrationResponse
  >(`/api/v1/accounts/registration`, body);

  if (response === null) return null;
  return transformPostRegistrationResponse(response);
};
