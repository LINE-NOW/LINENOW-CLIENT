import * as S from "./ButtonLayout.styled";

interface ButtonLayoutProps extends React.ComponentPropsWithoutRef<"section"> {
  colCount: number;
  rowGap?: string;
  colGap?: string;
}

const ButtonLayout = (props: ButtonLayoutProps) => {
  const {
    colCount,
    rowGap = "0.5rem",
    colGap = "0.5rem",
    children,
    ...sectionProps
  } = props;

  return (
    <section css={[S.getLayout(colCount, colGap, rowGap)]} {...sectionProps}>
      {children}
    </section>
  );
};

export default ButtonLayout;
