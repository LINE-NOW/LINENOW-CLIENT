import { FormData } from "@interfaces/form";
import { useEffect, useState } from "react";

interface useFormProps<T extends FormData> {
  initialValues: T;
  getErrors: (values: T) => { [key in keyof T]?: string };
}

function useForm<T extends FormData>({
  initialValues,
  getErrors,
}: useFormProps<T>) {
  const [values, setValues] = useState<T>(initialValues);
  const [isValid, setIsValid] = useState<boolean>(false);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  useEffect(() => {
    setErrors(getErrors(values));
  }, [values]);

  useEffect(() => {
    const isCurrentValid =
      Object.values(values).every((value) => value != "") &&
      Object.values(errors).every((value) => value == undefined);
    setIsValid(isCurrentValid);
  }, [errors]);

  return {
    values,
    errors,
    isValid,
    handleChange,
  };
}

export default useForm;
