import { useEffect } from "react";
import BottomButton from "@components/bottomButton/BottomButton";

import Spinner from "@components/spinner/Spinner";
import {
  BoothDetailCard,
  BoothDetailContent,
  BoothDetailNotice,
} from "./_components";

import useAuth from "@hooks/useAuth";

import { Button, Flex, Label } from "@linenow/core/components";
import { useBottomSheet } from "@linenow/core/hooks";

import { useGetBooth, useGetBoothWaiting } from "@hooks/apis/booth";

import { useSetAtom } from "jotai";
import { boothAtom, waitingAtom } from "@atoms/boothWaitingAtoms";

import LoginBottomSheetContent from "@components/bottomSheet/login/LoginBottomSheetContent";

import SettingButton from "@components/button/SettingButton";

const TestBoothDetailPage = () => {
  const { isLogin } = useAuth();

  const { openBottomSheet } = useBottomSheet();
  const handleLoginButtonClick = () => {
    openBottomSheet({ children: <LoginBottomSheetContent /> });
  };

  const boothNumber = 25;

  const { data: booth, isLoading } = useGetBooth(boothNumber);

  const setBooth = useSetAtom(boothAtom);

  useEffect(() => {
    if (booth) setBooth(booth);
  }, [booth, setBooth]);

  if (isLoading) {
    return <Spinner />;
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

          {isLogin && <SettingButton />}
          <div>
            <BottomButton
              informationTitle={`축제를 기다리는`}
              informationSub={`40명`}
            >
              {isLogin ? (
                <SettingButton />
              ) : (
                <>
                  <Button variant="lime" onClick={handleLoginButtonClick}>
                    <span>미리 로그인 해두기</span>
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
