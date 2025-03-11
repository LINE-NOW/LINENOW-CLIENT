import * as S from "./Label.styled";

import { FontStyleKey } from "../../styles/fonts";
import { FontColorKey } from "../../styles/theme";

export type LabelProps<T extends React.ElementType> = {
  as?: T;
  font?: FontStyleKey;
  color?: FontColorKey;
} & React.ComponentPropsWithoutRef<T>;

const Label = <T extends React.ElementType>(props: LabelProps<T>) => {
  const { as = "span", font = "body1", color, children, ...attributes } = props;

  const Component = as;

  return (
    <Component
      css={[S.getLabelStyle(font), S.getColorStyle(color)]}
      {...attributes}
    >
      {children}
    </Component>
  );
};

export default Label;
