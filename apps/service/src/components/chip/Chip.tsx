import { ReactNode } from "react";

// type
import { SchemeType, ShapeType } from "@linenow-types/style";

//component
import { ChipWrapper } from "./Chip.styled";

export interface ChipProps {
  scheme?: SchemeType;
  shape?: ShapeType;
  children?: ReactNode;
}

const Chip = ({ scheme = "blue", shape = "fill", children }: ChipProps) => {
  return (
    <ChipWrapper $scheme={scheme} $shape={shape}>
      {children}
    </ChipWrapper>
  );
};

export default Chip;
