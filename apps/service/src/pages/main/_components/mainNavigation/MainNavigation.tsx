import * as S from "./MainNavigation.styled";
import MainNavigationWaitingList from "./MainNavigationWaitingList";
import { Label } from "@linenow/core/components";

import useMainViewType from "@pages/main/_hooks/useMainViewType";
import useMainScroll from "@pages/main/_hooks/useMainScroll";

interface MainNavigationProps extends React.PropsWithChildren {}

const MainNavigation = (props: MainNavigationProps) => {
  const { children } = props;
  const { isFold } = useMainScroll();
  const { viewType } = useMainViewType();

  return (
    <>
      <header css={S.getWrapper(viewType, isFold)}>
        {/* 상단 대기 리스트 */}
        <div css={S.getNavigationWrapper(viewType, isFold)}>
          <Label font="head2" color="white">
            라인나우
          </Label>
          <MainNavigationWaitingList />
        </div>

        {/* 부스 리스트 헤더 */}
        {children}
      </header>

      {/* 부스 리스트 용 공백 */}
      {<div css={S.getSpace(viewType, isFold)} />}
    </>
  );
};
export default MainNavigation;
