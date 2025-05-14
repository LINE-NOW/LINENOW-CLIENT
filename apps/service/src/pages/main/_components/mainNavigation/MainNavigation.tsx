import * as S from "./MainNavigation.styled";
import MainNavigationWaitingList from "./MainNavigationWaitingList";

import useMainViewType from "@pages/main/_hooks/useMainViewType";
import useMainScroll from "@pages/main/_hooks/useMainScroll";
import useAuth from "@hooks/useAuth";
import WaitingCardLogin from "@components/waitingCard/WaitingCardLogin";
import MainNavigationTitleGuest from "./title/MainNavigationTitleGuest";
import MainNavigationTitleUser from "./title/MainNavigationTitleUser";
import { Flex } from "@linenow/core/components";

interface MainNavigationProps extends React.PropsWithChildren {}

const MainNavigation = (props: MainNavigationProps) => {
  // useGetWaitings("waiting");
  const { children } = props;
  const { isFold } = useMainScroll();
  const { viewType } = useMainViewType();

  const { isLogin } = useAuth();

  const Content = () =>
    isLogin ? <MainNavigationWaitingList /> : <WaitingCardLogin />;
  const Title = () =>
    isLogin ? <MainNavigationTitleUser /> : <MainNavigationTitleGuest />;

  return (
    <>
      <header css={S.getWrapper(viewType, isFold)}>
        {/* 상단 대기 리스트 */}

        <div css={S.getNavigationWrapper(viewType, isFold)}>
          <Flex
            height="1.5rem"
            padding="0rem 0.25rem"
            justifyContent="space-between"
            alignItem="center"
          >
            <Title />
          </Flex>

          <Content />
        </div>

        {/* 부스 리스트 헤더 */}
        {children}
      </header>

      {/* 부스 리스트 용 공백 */}
      <div css={S.getSpace(viewType, isFold)} />
    </>
  );
};
export default MainNavigation;
