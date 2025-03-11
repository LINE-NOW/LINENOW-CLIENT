import { SidebarProps } from "@components/sidebar/Sidebar";
import * as S from "./Navigation.styled";
import { CommonButton, Icon } from "@linenow/core/components";
import { Link } from "react-router-dom";

const Navigation = ({ isOpen, isMobile, setIsOpen }: SidebarProps) => {
  return (
    <S.NavigationWrapper>
      <Link to="/">
        <img src="/images/image_vertical_logo.svg" />
      </Link>
      {isMobile ? (
        isOpen ? (
          <CommonButton onClick={() => setIsOpen(false)}>
            <Icon icon="up" color="white" />
          </CommonButton>
        ) : (
          <CommonButton onClick={() => setIsOpen(true)}>
            <Icon icon="down" color="white" />
          </CommonButton>
        )
      ) : null}
    </S.NavigationWrapper>
  );
};

export default Navigation;
