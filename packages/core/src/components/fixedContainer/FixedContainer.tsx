import * as S from "./FixedContainer.styled";

export interface FixedContainerProps extends React.PropsWithChildren {
  zIndex?: number;
  justifyContent?: "start" | "center" | "end";
  closeContainer?: () => void;
}

const FixedContainer = (props: FixedContainerProps) => {
  const {
    zIndex = 1,
    justifyContent = "center",
    children,
    closeContainer,
  } = props;

  return (
    <section
      onClick={closeContainer}
      css={[S.getFixedContainerStyle(zIndex, justifyContent)]}
    >
      {children}
    </section>
  );
};

export default FixedContainer;
