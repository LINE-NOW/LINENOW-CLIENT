// components
import * as S from "./DefaultLayout.styled";
import Navigation from "@components/navigation/Navigation";
import Sidebar from "@components/sidebar/Sidebar";
import useView from "@hooks/useView";
import { ModalProvider } from "@linenow/core/components";
import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

const DefaultLayout = () => {
  const { isMobile } = useView();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <S.DefaultLayoutGrid className={isMobile ? "mobile" : "tablet"}>
      <ModalProvider />
      <Navigation isMobile={isMobile} isOpen={isOpen} setIsOpen={setIsOpen} />
      <Sidebar isMobile={isMobile} isOpen={isOpen} setIsOpen={setIsOpen} />
      <S.DefaultLayoutOutletWrapper>
        <Outlet />
      </S.DefaultLayoutOutletWrapper>
    </S.DefaultLayoutGrid>
  );
};

export default DefaultLayout;
