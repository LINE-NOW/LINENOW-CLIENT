import {
  Button,
  ButtonLayout,
  Flex,
  Icon,
  Label,
} from "@linenow/core/components";
import * as S from "../BottomSheetContent.styled";
import { useBottomSheet } from "@linenow/core/hooks";
import { useState } from "react";

interface AgreeBottomSheetContentProps {
  onClick: () => void;
}

interface Agree {
  label: string;
  url: string;
}

type CheckList = Record<keyof AgreeList, Agree>;

interface AgreeList {
  policy: boolean;
  personal: boolean;
  location: boolean;
}

const AgreeBottomSheetContent = (props: AgreeBottomSheetContentProps) => {
  const { onClick } = props;

  const [checkList, setCheckList] = useState<AgreeList>({
    policy: false,
    personal: false,
    location: false,
  });

  const isAllChecked = Object.keys(checkList).every(
    (key) => checkList[key as keyof AgreeList]
  );

  const { closeBottomSheet } = useBottomSheet();
  const handleAgreeButton = () => {
    onClick();
    closeBottomSheet();
  };

  const agreeList: CheckList = {
    policy: {
      label: "라인나우 서비스 이용약관",
      url: "https://thorn-freesia-96f.notion.site/1f5d72341c498025813dff9f58b0e412?pvs=4",
    },
    personal: {
      label: "개인정보 수집·이용 동의서",
      url: "https://thorn-freesia-96f.notion.site/1f5d72341c49807c8cd8cf249f3d04a9?pvs=4",
    },
    location: {
      label: "위치정보 이용약관",
      url: "https://thorn-freesia-96f.notion.site/1f5d72341c49806096fcfc7b694f0013?pvs=4",
    },
  };

  const toggleAllCheck = () => {
    const newValue = !isAllChecked;
    setCheckList({
      policy: newValue,
      personal: newValue,
      location: newValue,
    });
  };
  const CheckAll = () => {
    return (
      <Flex
        as={"button"}
        onClick={toggleAllCheck}
        padding="0.5rem 0"
        alignItem="center"
        gap="0.25rem"
      >
        <Icon icon="check" color={isAllChecked ? "blue" : "grayLight"} />
        <Label color="black" font="head3">
          필수 이용약관 모두 동의하기
        </Label>
      </Flex>
    );
  };

  const CheckLabel = (key: keyof AgreeList) => {
    const isChecked = checkList[key];
    const label = agreeList[key].label;
    const url = agreeList[key].url;

    return (
      <Flex
        width="100%"
        flexGrow={1}
        direction="row"
        gap="0.5rem"
        alignItem="center"
        justifyContent="space-between"
      >
        <Flex
          as={"button"}
          onClick={() => {
            setCheckList({ ...checkList, [key]: !checkList[key] });
          }}
          padding="0.25rem 0"
          gap="0.25rem"
        >
          <Icon icon="check" color={isChecked ? "gray" : "grayLight"} />
          <Label color="blackLight">{label}</Label>
        </Flex>

        <Icon
          icon="right"
          color="grayLight"
          onClick={() => {
            window.open(url, "_blank");
          }}
        />
      </Flex>
    );
  };
  return (
    <S.BottomSheetContentWrapper>
      {/* 타이틀 */}
      <S.BottomSheetTitleWrapper>
        <Label font="head1" color="black">
          이용약관을 확인해주세요
        </Label>
        {/* <Label font="body1" color="blackLight">
          이용약관 동의 후 입력하신 전화번호로 인증번호가 전송돼요.
        </Label> */}
      </S.BottomSheetTitleWrapper>

      <Flex direction="column" gap="0.25rem">
        {CheckLabel("policy")}
        {CheckLabel("personal")}
        {CheckLabel("location")}
      </Flex>
      <CheckAll />
      {/* 버튼 */}

      <ButtonLayout colCount={1}>
        <Button
          type="button"
          onClick={handleAgreeButton}
          variant="lime"
          disabled={!isAllChecked}
        >
          인증번호 전송하기
        </Button>
      </ButtonLayout>
    </S.BottomSheetContentWrapper>
  );
};

export default AgreeBottomSheetContent;
