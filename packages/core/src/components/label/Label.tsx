import * as S from "./Label.styled";

import { FontStyleKey } from "../../styles/fonts";
import { FontColorKey } from "../../styles/theme";

export type LabelProps<T extends React.ElementType> = {
  as?: T;
  font?: FontStyleKey;
  color?: FontColorKey;
  ellipsis?: boolean;
  padding?: string;
} & React.ComponentPropsWithoutRef<T>;

const Label = <T extends React.ElementType>(props: LabelProps<T>) => {
  const {
    as = "div",
    font = "body1",
    color,
    ellipsis = false,
    children,
    padding = "0rem",
    ...attributes
  } = props;

  const Component = as;

  return (
    <Component
      css={[
        S.getLabelStyle(font, padding),
        S.getColorStyle(color),
        ellipsis && S.getEllipsisStyle(),
      ]}
      {...attributes}
    >
      {children}
    </Component>
  );
};

export default Label;
