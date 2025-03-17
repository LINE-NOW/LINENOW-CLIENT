import * as S from "./Flex.styled";

export type FlexStyle = {
  width?: string;
  flexGrow?: 0 | 1;
  gap?: string;
  direction?: "column" | "row";
  alignItem?: "center" | "start" | "end";
  justifyContent?: "center" | "start" | "end" | "space-between";
  overflow?: "visible" | "hidden" | "scroll";
};

export type FlexProps<T extends React.ElementType> = {
  as?: T;
} & FlexStyle &
  React.ComponentPropsWithoutRef<T>;

const Flex = <T extends React.ElementType>(props: FlexProps<T>) => {
  const {
    as = "div",
    width = "auto",
    flexGrow = 0,
    gap = "0rem",
    direction = "row",
    alignItem = "start",
    justifyContent = "start",
    overflow = "hidden",
    ...attributes
  } = props;

  const Component = as;

  return (
    <Component
      css={[
        S.getFlexStyle({
          width,
          flexGrow,
          gap,
          direction,
          alignItem,
          justifyContent,
          overflow,
        }),
      ]}
      {...attributes}
    ></Component>
  );
};
export default Flex;
