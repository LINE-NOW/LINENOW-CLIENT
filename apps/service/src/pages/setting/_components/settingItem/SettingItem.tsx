import * as S from './SettingItem.styled';

export interface SettingItemProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  title?: string;
}

const SettingItem = ({ onClick, title, ...props }: SettingItemProps) => {
  return (
    <S.SettingItemComponentWrapper onClick={onClick} {...props}>
      <S.SettingItemComponentText>{title}</S.SettingItemComponentText>
    </S.SettingItemComponentWrapper>
  );
};
export default SettingItem;
