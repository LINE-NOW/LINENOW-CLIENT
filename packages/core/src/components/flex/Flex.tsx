import * as S from "./Flex.styled";

export type FlexStyle = {
  width?: "100%" | "auto" | string;
  height?: string;
  flexGrow?: 0 | 1;
  gap?: string;
  direction?: "column" | "row";
  alignItem?: "center" | "start" | "end" | "stretch";
  justifyContent?: "center" | "start" | "end" | "space-between";
  overflow?: "visible" | "hidden" | "scroll";
  padding?: string;
};

export type FlexProps<T extends React.ElementType> = {
  as?: T;
} & FlexStyle &
  React.ComponentPropsWithoutRef<T>;

const Flex = <T extends React.ElementType>(props: FlexProps<T>) => {
  const {
    as = "div",
    width = "auto",
    height = "auto",
    flexGrow = 0,
    gap = "0rem",
    direction = "row",
    alignItem = "stretch",
    justifyContent = "start",
    overflow = "hidden",
    padding = "0rem",
    ...attributes
  } = props;

  const Component = as;

  return (
    <Component
      css={[
        S.getFlexStyle({
          width,
          height,
          flexGrow,
          gap,
          direction,
          alignItem,
          justifyContent,
          overflow,
          padding,
        }),
      ]}
      {...attributes}
    ></Component>
  );
};
export default Flex;
