import { useEffect } from "react";

// hooks
import { useBottomSheet } from "@linenow/core/hooks";

import useAuth from "@hooks/useAuth";
import { useGetBooth } from "@hooks/apis/booth";
import { useGetUserCount } from "@hooks/apis/user";

// components
import { Button, Flex, Label } from "@linenow/core/components";
import SettingButton from "@components/button/SettingButton";
import BottomButton from "@components/bottomButton/BottomButton";
import LoginBottomSheetContent from "@components/bottomSheet/login/LoginBottomSheetContent";
import {
  BoothDetailCard,
  BoothDetailContent,
  BoothDetailNotice,
} from "@pages/boothDetail/_components";
import BoothPageSkeleton from "@components/skeleton/BoothPage.Skeloton";

// atoms
import { useSetAtom } from "jotai";
import { boothAtom } from "@atoms/boothWaitingAtoms";

const TestBoothDetailPage = () => {
  const { isLogin } = useAuth();

  const { openBottomSheet } = useBottomSheet();
  const handleLoginButtonClick = () => {
    openBottomSheet({ children: <LoginBottomSheetContent /> });
  };

  const boothNumber = 25;

  const { data: booth, isLoading } = useGetBooth(boothNumber);
  const { data: userCount } = useGetUserCount();

  const setBooth = useSetAtom(boothAtom);

  useEffect(() => {
    if (booth) setBooth(booth);
  }, [booth, setBooth]);

  if (isLoading) {
    return <BoothPageSkeleton />;
  }

  return (
    <>
      {booth && (
        <>
          <BoothDetailCard booth={booth} />
          <Flex padding="16px 16px 20px 16px" direction="column" gap="1rem">
            <BoothDetailContent booth={booth} />
            <BoothDetailNotice booth={booth} />
          </Flex>

          <div>
            <BottomButton
              informationTitle={`축제를 기다리는`}
              informationSub={`${userCount}명`}
            >
              {isLogin ? (
                <SettingButton />
              ) : (
                <>
                  <Button variant="lime" onClick={handleLoginButtonClick}>
                    <span>미리 회원가입 해두기</span>
                  </Button>
                  <Label font="caption" color="gray">
                    * 축제 당일에는 접속 인원이 많아 로딩이 걸릴 수 있어요
                  </Label>
                </>
              )}
            </BottomButton>
          </div>
        </>
      )}
    </>
  );
};

export default TestBoothDetailPage;
