import { Label } from "@linenow/core/components";
import * as S from "./SettingItem.styled";

export interface SettingItemProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  title?: string;
}

const SettingItem = ({ onClick, title, ...props }: SettingItemProps) => {
  return (
    <S.SettingItemComponentWrapper onClick={onClick} {...props}>
      <Label font="head3" color="black">
        {title}
      </Label>
    </S.SettingItemComponentWrapper>
  );
};
export default SettingItem;
