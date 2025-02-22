export interface FormData extends Record<string, any> {}

// 유효성 검증 기본
export interface ValidateConfig {
  regex: RegExp;
  regexError?: string;
  minLength: number;
  maxLength?: number;
  lengthError?: string;
}

export type ValidateConfigs<T extends FormData> = Record<
  keyof T,
  ValidateConfig
>;
