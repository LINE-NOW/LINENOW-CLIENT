// type
import { getVariantStyle, Variant } from "../../styles/variant";

//component
import * as S from "./Chip.styled";
import Label from "../label/Label";

export interface ChipProps extends React.PropsWithChildren {
  variant?: Variant;
  width?: string;
}

const Chip = (props: ChipProps) => {
  const { variant = "blue", width = "auto", children } = props;
  return (
    <Label
      as="div"
      font="chip"
      css={[S.getWrapperStyle(width), getVariantStyle(variant)]}
    >
      {children}
    </Label>
  );
};

export default Chip;
