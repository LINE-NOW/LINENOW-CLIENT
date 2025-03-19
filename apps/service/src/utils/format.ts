export const formatPhonenumber = (currentValue: string) => {
  let numbersOnly = currentValue.replace(/\D/g, ""); // 숫자 이외 제거
  if (numbersOnly.length > 3 && numbersOnly.length <= 7) {
    numbersOnly = numbersOnly.replace(/(\d{3})(\d{1,4})/, "$1-$2");
  } else if (numbersOnly.length > 7) {
    numbersOnly = numbersOnly.replace(/(\d{3})(\d{4})(\d{1,4})/, "$1-$2-$3");
  }

  return numbersOnly;
};
