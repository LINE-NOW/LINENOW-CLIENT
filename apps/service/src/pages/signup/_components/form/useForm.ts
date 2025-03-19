import { useEffect, useRef, useState } from "react";

type TFromDataField = { [key: string]: any };

// 폼의 상태
type TFieldStates = {
  isTouched: boolean; // 한번 focus 되었는가?
  isError: boolean; // 필드에 에러가 있는가?
  error?: string; // 띄울 에러 메세지 (undefined)
};
type TFormState<TFormData extends TFromDataField> = {
  [Key in keyof TFormData]: TFieldStates;
};

// props - interface
interface UseFormProps<TFormData extends TFromDataField> {
  initialValues: TFormData; // 초기 값
}

type Rule = (value: string) => string | true;
type Rules = Rule[];

type TFormValidation<TFormData extends TFromDataField> = {
  [Key in keyof TFormData]?: Rules;
};

type TFormFieldRef<TFormData extends TFromDataField> = {
  [Key in keyof TFormData]?: HTMLInputElement | null;
};

const useForm = <TFormData extends TFromDataField>(
  props: UseFormProps<TFormData>
) => {
  const { initialValues } = props;

  // formValues
  const values = useRef<TFormData>({ ...initialValues });
  const formValidation = useRef<TFormValidation<TFormData>>({});
  const refs = useRef<TFormFieldRef<TFormData>>({});

  // formState
  const initialFormState: TFormState<TFormData> = Object.keys(
    initialValues
  ).reduce((acc, key) => {
    acc[key as keyof TFormData] = {
      isTouched: false,
      isError: true,
      error: undefined,
    };
    return acc;
  }, {} as TFormState<TFormData>);

  const [formState, setFromState] =
    useState<TFormState<TFormData>>(initialFormState);

  const setFieldStates = (
    name: keyof TFormData,
    states: Partial<TFieldStates>
  ) => {
    const isChanged = !Object.keys(states).every((state) => {
      const key = state as keyof TFieldStates;
      return formState[name][key] === states[key];
    });

    // 이전과 다른 상태가 있다면 상태를 업데이트한다.
    isChanged &&
      setFromState({ ...formState, [name]: { ...formState[name], ...states } });
  };

  // 필드 정보가 올바른지 확인!
  const getFieldIsError = (name: keyof TFormData) => formState[name].isError;
  const getError = (name: keyof TFormData) =>
    formState[name].isTouched ? formState[name].error : undefined;
  // 값이 변경을 반영
  const handleChange = (name: keyof TFormData, value: any) => {
    values.current[name] = value;
  };

  const validateField = (
    name: keyof TFormData,
    value: any,
    isRequired: boolean = false
  ) => {
    const error = formValidation.current[name]
      ?.map((rule) => rule(value))
      .find((result) => result !== true);

    setFieldStates(name, {
      isError: (isRequired && value === "") || error !== undefined,
      error: error,
    });
  };

  const register = (
    name: keyof TFormData,
    props: {
      handleBlur?: () => void;
      rules?: Rules;
    } = {}
  ) => {
    const { handleBlur, rules } = props;
    formValidation.current[name] = rules;

    return {
      ref: (el: HTMLInputElement | null) => {
        refs.current[name] = el;
      },
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        handleChange(name, e.target.value);
        validateField(name, e.target.value, e.target.required);
      },
      onBlur: (e: React.ChangeEvent<HTMLInputElement>) => {
        setFieldStates(name, { isTouched: true });
        validateField(name, e.target.value, e.target.required);
        handleBlur && handleBlur();
      },
      error: getError(name),
    };
  };

  useEffect(() => {
    console.log(formState);
    console.log("ref", refs.current);
  }, [formState]);

  const isFormValidate = Object.keys(formState).every((state) => {
    const key = state as keyof TFieldStates;
    return !formState[key].isError;
  });

  const submitFrom = () => {
    console.log(values.current);
    console.log("폼 제출에 성공했어요!");
  };

  return {
    register,
    submitFrom,
    isFormValidate,
    getFieldIsError,
    values: values.current,
    fieldRefs: refs.current,
  };
};

export default useForm;
