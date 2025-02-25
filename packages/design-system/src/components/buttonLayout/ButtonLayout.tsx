import * as S from "./ButtonLayout.styled";

interface ButtonLayoutProps extends React.ComponentPropsWithoutRef<"section"> {
  colCount?: number;
  colTemplate?: string;
  rowGap?: string;
  colGap?: string;
}

const ButtonLayout = (props: ButtonLayoutProps) => {
  const {
    colCount = 1,
    colTemplate,
    rowGap = "0.5rem",
    colGap = "0.5rem",
    children,
    ...sectionProps
  } = props;

  return (
    <section
      css={[S.getLayout(colCount, colGap, rowGap, colTemplate)]}
      {...sectionProps}
    >
      {children}
    </section>
  );
};

export default ButtonLayout;
