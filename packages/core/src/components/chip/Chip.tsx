import { ReactNode } from "react";

// type
import { getVariantStyle, Variant } from "../../styles/variant";

//component
import * as S from "./Chip.styled";
import Label from "../label/Label";

export interface ChipProps {
  variant?: Variant;
  children?: ReactNode;
}

const Chip = (props: ChipProps) => {
  const { variant = "blue", children } = props;
  return (
    <Label
      as="div"
      font="button2"
      css={[S.getWrapperStyle(), getVariantStyle(variant)]}
    >
      {children}
    </Label>
  );
};

export default Chip;
