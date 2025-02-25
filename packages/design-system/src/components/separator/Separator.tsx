import { BackgroundColorKey } from "../../styles/theme";
import * as S from "./Separator.styled";

export interface SeparatorProps {
  width?: string;
  height?: number;
  color?: BackgroundColorKey;
}

const Separator = (props: SeparatorProps) => {
  const { width = "100%", height = 4, color = "grayLight" } = props;
  return <div css={[S.getSeparatorStyle({ width, height, color })]} />;
};

export default Separator;
