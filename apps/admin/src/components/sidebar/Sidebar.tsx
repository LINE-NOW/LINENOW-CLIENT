import * as S from "./Sidebar.styled";

import {
  Button,
  ButtonLayout,
  CommonButton,
  Icon,
  useModal,
} from "@linenow/design-system";
import { useLocation } from "react-router-dom";
import SidebarButton, { SidebarButtonProps } from "./SidebarButton";

import useSidebarModalConfig from "./useSidebarModalConfig";
import useBoothInfo from "@hooks/useBoothInfo";
import { useGetBoothStatus } from "@hooks/apis/boothManaging";
import { useEffect } from "react";
import useIsLoading from "@hooks/useIsLoading";
import { usePostLogout } from "@hooks/apis/auth";
import Spinner from "@components/spinner/Spinner";

export interface SidebarProps {
  isMobile: boolean;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}
const Sidebar = ({ isMobile, isOpen, setIsOpen }: SidebarProps) => {
  const { setLoadings } = useIsLoading();
  const { data: boothData, isLoading } = useGetBoothStatus();
  const { mutate: postLogout, isPending } = usePostLogout();

  useEffect(() => {
    setBoothInfo(boothData || { boothID: 0, name: "", status: "not_started" });
  }, [boothData]);

  useEffect(() => {
    setLoadings({ isFullLoading: isPending });
  }, [isPending]);

  const { boothInfo, setBoothInfo } = useBoothInfo();

  const { openModal, closeModal } = useModal();

  const {
    startBoothModal,
    stopBoothModal,
    startWaitingModal,
    stopWaitingModal,
  } = useSidebarModalConfig();

  const handleLogout = async () => {
    postLogout();
  };

  const logoutModalProps = {
    title: "로그아웃 하시겠습니까?",
    sub: "언제든지 다시 로그인할 수 있습니다.",
    primaryButton: {
      children: "로그아웃",
      onClick: handleLogout,
    },
    secondButton: {
      children: "취소",
      onClick: closeModal,
    },
  };

  const handleLogoutClick = () => {
    openModal(logoutModalProps);
  };

  const location = useLocation();

  const navigateList: SidebarButtonProps[] = [
    {
      isSelected: location.pathname == "/",
      to: "/",
      label: "대기 팀 관리",
    },
    {
      isSelected: location.pathname == "/faq",
      to: "/faq",
      label: "문의하기",
    },
  ];

  const RequireStartingButton = () => {
    return (
      <Button
        variant="blue"
        disabled={true}
        style={{ backgroundColor: "#333740", color: "#656972" }}
      >
        운영 시작을 해주세요!
      </Button>
    );
  };

  const handleStopWaitingButtonClick = () => {
    openModal(stopWaitingModal());
  };

  const handleStartWaitingButtonClick = () => {
    openModal(startWaitingModal());
  };

  const handleStopBoothButtonClick = () => {
    openModal(stopBoothModal());
  };

  const handleStartBoothButtonClick = () => {
    openModal(startBoothModal());
  };
  const StopWaitingButton = () => {
    return (
      <Button variant="blueLight" onClick={handleStopWaitingButtonClick}>
        대기 중지하기 <Icon name={"pause_blue"} size={"1.5rem"} />
      </Button>
    );
  };

  const StartWaitingButton = () => {
    return (
      <Button variant="blue" onClick={handleStartWaitingButtonClick}>
        대기 재개하기 <Icon name={"play_white"} size={"1.5rem"} />
      </Button>
    );
  };

  const StopBoothButton = () => {
    return (
      <Button variant="limeLight" onClick={handleStopBoothButtonClick}>
        운영 종료하기 <Icon name={"open_gary"} size={"1.5rem"} />
      </Button>
    );
  };

  const StartBoothButton = () => {
    return (
      <Button variant="lime" onClick={handleStartBoothButtonClick}>
        운영 시작하기 <Icon name={"open_gary"} size={"1.5rem"} />
      </Button>
    );
  };

  const getButton = () => {
    if (isLoading) {
      return null;
    }

    switch (boothInfo?.status) {
      case "not_started":
        return [
          <RequireStartingButton key={1} />,
          <StartBoothButton key={2} />,
        ];
      case "operating":
        return [<StopWaitingButton key={1} />, <StopBoothButton key={2} />];
      case "paused":
        return [<StartWaitingButton key={1} />, <StopBoothButton key={2} />];
      case "finished":
        return null;
    }
  };

  if (isMobile && !isOpen) {
    return null;
  }

  return (
    <>
      <S.SidebarWrapper>
        <S.SidebarUserInfoWapper>
          {isLoading ? (
            <Spinner />
          ) : (
            <>
              <h3>안녕하세요</h3>
              <h1>
                <span className="lime">{boothInfo?.name}</span> 님
              </h1>
              <CommonButton>
                <S.SidebarLogout onClick={handleLogoutClick}>
                  로그아웃
                </S.SidebarLogout>
              </CommonButton>
            </>
          )}
        </S.SidebarUserInfoWapper>

        <S.SidebarButtonWrapper>
          {navigateList.map((item, index) => {
            return <SidebarButton {...item} key={index} />;
          })}
        </S.SidebarButtonWrapper>

        <ButtonLayout
          colCount={1}
          colGap="0.5rem"
          style={{ padding: `1.25rem 0.75rem 2rem 0.75rem` }}
        >
          {getButton()}
        </ButtonLayout>
      </S.SidebarWrapper>
      {isMobile && isOpen ? (
        <S.SidebarBackground
          onClick={() => {
            setIsOpen(false);
          }}
        />
      ) : null}
    </>
  );
};

export default Sidebar;
