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
    <>
      <section css={[S.getFixedContainerStyle(zIndex, justifyContent)]}>
        <div onClick={closeContainer} css={[S.getFixedBackgroundStyle]} />
        {children}
      </section>
    </>
  );
};

export default FixedContainer;
