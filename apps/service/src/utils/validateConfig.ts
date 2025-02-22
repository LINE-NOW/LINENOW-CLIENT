import { FormData, ValidateConfig, ValidateConfigs } from "@interfaces/form";

const validateConfig = (
  config: ValidateConfig,
  value: string
): string | undefined => {
  if (value.length === 0) {
    return undefined;
  }
  if (
    value.length < config.minLength ||
    (config.maxLength && value.length > config.maxLength)
  ) {
    return config.lengthError;
  }
  if (config.regex && !config.regex.test(value)) {
    return config.regexError;
  }
  return undefined;
};

const validateConfigs = <T extends FormData>(
  configs: ValidateConfigs<T>,
  values: T
) => {
  const errors: Partial<Record<keyof T, string>> = {};

  (Object.keys(configs) as Array<keyof T>).forEach((key) => {
    const config = configs[key];
    const value = values[key];
    const error = validateConfig(config, value);
    if (error) {
      errors[key] = error;
    }
  });

  return errors;
};

export default validateConfigs;
