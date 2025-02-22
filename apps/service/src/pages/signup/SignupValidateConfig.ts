import { ValidateConfigs } from "@interfaces/form";

export interface SignupFormValues {
  name: string;
  phonenumber: string;
  // verificationCode: string;
  password: string;
  confirmPassword: string;
}

export const initialSignupValues: SignupFormValues = {
  name: "",
  phonenumber: "",
  // verificationCode: "",
  password: "",
  confirmPassword: "",
};

export const signupValidateConfigs: ValidateConfigs<SignupFormValues> = {
  name: {
    regex: /^[ㄱ-ㅎ가-힣a-zA-Z]+$/,
    regexError: "이름을 정확하게 입력해주세요.",
    minLength: 1,
    maxLength: 4,
    lengthError: "이름은 1자 이상 4자 이하로 입력해주세요.",
  },
  phonenumber: {
    regex: /^[0-9]+$/,
    regexError: "전화번호는 숫자만 입력이 가능해요.",
    minLength: 10,
    maxLength: 11,
    lengthError: "전화번호는 10~11자리로 입력해주세요.",
  },
  // verificationCode: {
  //   regex: /^[0-9]+$/,
  //   regexError: "인증번호 숫자만 입력이 가능해요.",
  //   minLength: 5,
  //   maxLength: 5,
  //   lengthError: "5자리의 숫자로 된 인증번호를 입력해주세요.",
  // },
  password: {
    regex: /^[a-zA-Z0-9!@#$%^&*]+$/,
    regexError: "숫자와 문자, 특수기호 !@#$%^&*를 조합해주세요.",
    minLength: 8,
    maxLength: 100,
    lengthError: "비밀번호를 8자 이상 입력해주세요.",
  },
  confirmPassword: {
    regex: /^[a-zA-Z0-9!@#$%^&*]+$/,
    minLength: 4,
    maxLength: 100,
    lengthError: "비밀번호를 8자 이상 입력해주세요.",
  },
};
