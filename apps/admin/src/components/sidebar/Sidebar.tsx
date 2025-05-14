import * as S from "./Sidebar.styled";

import {
  Button,
  ButtonLayout,
  CommonButton,
  Icon,
} from "@linenow/core/components";
import { useModal } from "@linenow/core/hooks";
import { useLocation } from "react-router-dom";
import SidebarButton, { SidebarButtonProps } from "./SidebarButton";

import useBoothInfo from "@hooks/useBoothInfo";
import {
  useGetBoothStatus,
  usePostBoothStatus,
} from "@hooks/apis/boothManaging";
import { useEffect, useState } from "react";
import useIsLoading from "@hooks/useIsLoading";
import { usePostLogout } from "@hooks/apis/auth";
import Spinner from "@components/spinner/Spinner";
import {
  modalStartOperation,
  modalStartWaiting,
  modalStopOperation,
} from "@components/modal/boothStatus";
import { authAtom } from "@atoms/auth";
import { useAtom, useSetAtom } from "jotai";
import { getBoothRestartStatus } from "@apis/domains/boothOperating/apis";
import { pausedOverlayAtom } from "@hooks/useOverlay";

export interface SidebarProps {
  isMobile: boolean;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar = ({ isMobile, isOpen, setIsOpen }: SidebarProps) => {
  const { mutate: postBoothStatus } = usePostBoothStatus();
  const { setLoadings } = useIsLoading();
  const { data: boothData, isLoading: boothLoading } = useGetBoothStatus();
  const { mutate: postLogout, isPending: isLoadingLogout } = usePostLogout();
  const [auth] = useAtom(authAtom);
  const setShowOverlay = useSetAtom(pausedOverlayAtom); // 오버레이 상태 변경
  const [isRestart, setIsRestart] = useState<boolean>(false);

  const [boothStatus, setBoothStatus] = useState<string>("paused");

  const { setBoothInfo } = useBoothInfo();
  const { openModal, closeModal } = useModal();

  // Booth Info 업데이트
  useEffect(() => {
    setBoothInfo(boothData || { boothID: 0, name: "", status: "paused" });
  }, [boothData]);

  // 로그아웃 상태 관리
  useEffect(() => {
    setLoadings({ isFullLoading: isLoadingLogout });
  }, [isLoadingLogout]);

  // Booth 상태 가져오기
  useEffect(() => {
    const fetchBoothStatus = async () => {
      const statusData = await getBoothRestartStatus();
      console.log("ㅈㅂㅈㅂ", statusData);
      if (statusData) {
        setBoothStatus(statusData.operating_status);
        setIsRestart(statusData.is_restart);

        if (statusData.operating_status === "operating") {
          setShowOverlay(false);
        }
      }
    };

    fetchBoothStatus();
  }, [setShowOverlay]);

  useEffect(() => {
    if (isRestart === false) {
      setShowOverlay(true); // is_restart가 false일 때만 오버레이 띄움
    }
  }, [isRestart, setShowOverlay]);

  // 로그아웃 처리
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

  // 대기 팀 관리 및 문의하기
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

  // 대기 중지 버튼 클릭 시
  const handleStopBoothButtonClick = () => {
    openModal(
      modalStopOperation(() => {
        postBoothStatus(
          {
            requestBody: {
              operating_status: "paused",
            },
          },
          {
            onSuccess: () => {
              setBoothStatus("paused");
              setBoothInfo((prev) => ({ ...prev, status: "paused" }));
            },
          }
        );
      })
    );
  };

  // 대기 재개 버튼 클릭 시
  const handleStartBoothButtonClick = () => {
    if (isRestart) {
      openModal(
        modalStartWaiting(() => {
          postBoothStatus(
            {
              requestBody: {
                operating_status: "operating",
              },
            },
            {
              onSuccess: () => {
                setBoothStatus("operating");
                setBoothInfo((prev) => ({ ...prev, status: "operating" }));
              },
            }
          );
        })
      );
    } else {
      // is_restart가 false일 때 운영 시작 모달
      openModal(
        modalStartOperation(() => {
          setShowOverlay(false); // 오버레이 숨기기
          postBoothStatus(
            {
              requestBody: {
                operating_status: "operating",
              },
            },
            {
              onSuccess: () => {
                setBoothStatus("operating");
                setBoothInfo((prev) => ({ ...prev, status: "operating" }));
              },
            }
          );
        })
      );
    }
  };

  const StopWaitingButton = () => {
    return (
      <Button variant="blueLight" onClick={handleStopBoothButtonClick}>
        대기 중지하기 <Icon icon="pasue" color="blue" />
      </Button>
    );
  };

  const StartWaitingButton = () => {
    return (
      <Button
        variant={isRestart ? "blue" : "lime"}
        onClick={handleStartBoothButtonClick}
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        {isRestart ? (
          <>
            대기 재개하기 <Icon icon="play" color="white" />
          </>
        ) : (
          <>
            운영 시작하기 <Icon icon="power" />
          </>
        )}
      </Button>
    );
  };

  const getButton = () => {
    if (boothLoading) {
      return <Spinner />;
    }

    switch (boothStatus) {
      case "operating":
        return <StopWaitingButton />;
      case "paused":
        return <StartWaitingButton />;
      default:
        return <StartWaitingButton />;
    }
  };

  if (isMobile && !isOpen) {
    return null;
  }

  return (
    <>
      <S.SidebarWrapper>
        <S.SidebarUserInfoWapper>
          {boothLoading ? (
            <Spinner />
          ) : (
            <>
              <h3>안녕하세요</h3>
              <h1>
                <span className="lime">{auth?.adminUser.manager_name}</span> 님
              </h1>
              <CommonButton>
                <S.SidebarLogout onClick={handleLogoutClick}>
                  로그아웃
                </S.SidebarLogout>
              </CommonButton>
            </>
          )}
        </S.SidebarUserInfoWapper>

        {/* 대기 팀 관리, 문의하기  */}
        <S.SidebarButtonWrapper>
          {navigateList.map((item, index) => {
            return <SidebarButton {...item} key={index} />;
          })}
        </S.SidebarButtonWrapper>

        {/* 대기 재개/중지 버튼 */}
        <ButtonLayout
          colCount={1}
          colGap="0.5rem"
          style={{ padding: `1.25rem 0.75rem 2rem 0.75rem`, zIndex: 999 }}
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
