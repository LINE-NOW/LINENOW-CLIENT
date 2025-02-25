import * as S from "./Select.styled";

// components
import { IconLabel } from "@linenow/design-system";

export interface OptionProps
  extends React.OptionHTMLAttributes<HTMLOptionElement> {
  label: string;
  value: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: OptionProps[];
}

const Select = (props: SelectProps) => {
  const { options, ...selectProps } = props;
  return (
    <IconLabel
      iconPosition="right"
      gap={"0.25rem"}
      icon="down"
      iconProps={{ color: "grayLight", size: 16 }}
    >
      <S.SelectWrapper
        defaultValue={selectProps.defaultValue || options[0].value}
        {...selectProps}
      >
        {options.map((option) => (
          <option key={option.value} {...option}>
            {option.label}
          </option>
        ))}
      </S.SelectWrapper>
    </IconLabel>
  );
};

export default Select;
