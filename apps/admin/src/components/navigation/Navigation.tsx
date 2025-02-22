import { SidebarProps } from "@components/sidebar/Sidebar";
import * as S from "./Navigation.styled";
import { CommonButton, Icon } from "@linenow/design-system";
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
            <Icon name={"up_white"} size={"1.5rem"} />
          </CommonButton>
        ) : (
          <CommonButton onClick={() => setIsOpen(true)}>
            <Icon name={"down_white"} size={"1.5rem"} />
          </CommonButton>
        )
      ) : null}
    </S.NavigationWrapper>
  );
};

export default Navigation;
