import WaitingCard from "@components/waitingCard/WaitingCard";
import MainNavigationWaitingList from "./MainNavigationWaitingList";
import WaitingCardLogin from "@components/waitingCard/WaitingCardLogin";
import React from "react";

interface Props {
  isLogin: boolean;
  waitings: React.ComponentProps<typeof WaitingCard>[];
}

const MainNavigationContent = ({ isLogin, waitings }: Props) => {
  return isLogin ? (
    <MainNavigationWaitingList waitings={waitings} />
  ) : (
    <WaitingCardLogin />
  );
};

export default React.memo(
  MainNavigationContent,
  (prev, next) => prev.waitings === next.waitings
);
