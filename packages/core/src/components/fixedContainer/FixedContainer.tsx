import * as S from "./FixedContainer.styled";

export interface FixedContainerProps extends React.ComponentProps<"section"> {
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
    ...attributes
  } = props;

  return (
    <>
      <section
        css={[S.getFixedContainerStyle(zIndex, justifyContent)]}
        {...attributes}
      >
        <div onClick={closeContainer} css={[S.getFixedBackgroundStyle]} />
        {children}
      </section>
    </>
  );
};

export default FixedContainer;
