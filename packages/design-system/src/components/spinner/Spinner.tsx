import { BorderColorKey } from "../../styles/theme";
import * as S from "./Spinner.styled";

interface SpinnerProps {
  size?: number;
  color?: BorderColorKey;
}
const Spinner = (props: SpinnerProps) => {
  const { size = 48, color = "blue" } = props;

  return (
    <S.SpinnerWrapper>
      <div css={[S.getSpinnerStyle(size, color)]} />
    </S.SpinnerWrapper>
  );
};

export default Spinner;
