import * as S from "../BottomSheetContent.styled";

import { ButtonLayout, Label } from "@linenow/core/components";

import { ReactNode } from "react";

interface EnteranceBottomSheetContentProps {
  title: string;
  description: string;
  content: ReactNode;
  buttons: ReactNode;
}

const EnteranceBottomSheetContent = (
  props: EnteranceBottomSheetContentProps
) => {
  const { title, description, content, buttons } = props;
  return (
    <S.BottomSheetContentWrapper>
      {/* 타이틀 */}
      <S.BottomSheetTitleWrapper>
        <Label font="head1" color="black" children={title} />
        <Label font="body1" color="blackLight" children={description} />
      </S.BottomSheetTitleWrapper>

      {content}

      {/* 버튼 */}
      <ButtonLayout colCount={1}>{buttons}</ButtonLayout>
    </S.BottomSheetContentWrapper>
  );
};

export default EnteranceBottomSheetContent;
