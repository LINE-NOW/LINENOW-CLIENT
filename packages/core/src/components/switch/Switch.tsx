import * as S from "./Switch.styled";
import Icon from "../icon/Icon";
import { IconKey } from "../icon/icons";

interface SwitchProps extends React.ComponentPropsWithoutRef<"button"> {
  icon: IconKey;
}

const Switch = (props: SwitchProps) => {
  const { icon, children, onClick, ...buttonProps } = props;
  return (
    <button
      css={[S.getWrapperstyle(), onClick && S.getAnimation()]}
      onClick={onClick}
      {...buttonProps}
    >
      <Icon icon={icon} size={16} color={"gray"} />
      {children}
    </button>
  );
};

export default Switch;
