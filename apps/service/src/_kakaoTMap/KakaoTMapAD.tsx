import { useModal } from "@linenow/core/hooks";
import * as S from "./KakaoTMapAD.styled";

import {
  CommonButton,
  Flex,
  Icon,
  Label,
  ModalProps,
} from "@linenow/core/components";

const KakaoTMapAD = () => {
  const navigateTMap = () => {
    window.open(
      `https://t.kakao.com/launch?page=now_here_thread&lat=37.5581504347694&lng=127.000687666168&poi=17932927&ref=nowhere_web_dongguk_uni`,
      "_blank"
    );
  };

  const onClick = () => {
    navigateTMap();
  };

  return (
    <Flex padding="0rem 0 1.5rem 0">
      <CommonButton onClick={onClick} css={S.getContainerStyle}>
        <Flex direction="column" padding="0 0.25rem" alignItem="start">
          <Label font="body2" color="gray">
            카카오 T
          </Label>
          <Label font="body1" color="blackLight">
            동국대학교 축제 현장의 모든 소통
          </Label>
        </Flex>

        <Icon icon="right" color="gray" />
      </CommonButton>
    </Flex>
  );
};

export default KakaoTMapAD;
