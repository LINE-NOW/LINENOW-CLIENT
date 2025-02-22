import * as S from "./Sidebar.styled";
export interface SidebarButtonProps {
  isSelected: boolean;
  to: string;
  label: string;
}
const SidebarButton = ({ isSelected, to, label }: SidebarButtonProps) => {
  return (
    <S.SidebarButton to={to} $isSelected={isSelected}>
      {label}
    </S.SidebarButton>
  );
};

export default SidebarButton;
