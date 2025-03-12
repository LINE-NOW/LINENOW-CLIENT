import * as S from "./Toast.styled";
import Label from "../label/Label";

export type ToastPosition = "top" | "bottom";

export interface ToastProps extends React.PropsWithChildren {
  position?: ToastPosition;
  duration?: number;
}

const Toast = (props: ToastProps) => {
  const { children, position, duration } = props;
  return (
    <Label
      as={"div"}
      font="body2"
      color="white"
      css={[
        S.getToastStyle(),
        position && duration && S.getToastPostion(position, duration),
      ]}
    >
      {children}
    </Label>
  );
};

export default Toast;
