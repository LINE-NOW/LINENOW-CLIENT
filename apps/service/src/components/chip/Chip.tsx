import { ReactNode } from "react";

// type
import { SchemeType, ShapeType } from "@linenow-types/style";

//component
import { ChipWrapper } from "./Chip.styled";

export interface ChipProps {
  variant?: SchemeType;
  shape?: ShapeType;
  children?: ReactNode;
}

const Chip = ({ variant = "blue", shape = "fill", children }: ChipProps) => {
  return (
    <ChipWrapper $variant={variant} $shape={shape}>
      {children}
    </ChipWrapper>
  );
};

export default Chip;
