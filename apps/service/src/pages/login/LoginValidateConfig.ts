import { ValidateConfigs } from "@interfaces/form";

export interface LoginFormValues {
  phonenumber: string;
  password: string;
}

export const initialLoginValues: LoginFormValues = {
  phonenumber: "",
  password: "",
};

export const loginValidateConfigs: ValidateConfigs<LoginFormValues> = {
  phonenumber: {
    regex: /^[0-9]+$/,
    minLength: 10,
    maxLength: 11,
  },
  password: {
    regex: /^[a-zA-Z0-9!@#$%^&*]+$/,
    minLength: 4,
    maxLength: 100,
  },
};
