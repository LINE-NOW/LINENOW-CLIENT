import useIsLoading from "@hooks/useIsLoading";
import Spinner from "./Spinner";
import * as S from "./Spinner.styled";

const FullSpinner = () => {
  const { loadings } = useIsLoading();

  if (loadings.isFullLoading) {
    return (
      <S.SpinnerBackground>
        <Spinner />
      </S.SpinnerBackground>
    );
  }

  return null;
};

export default FullSpinner;
