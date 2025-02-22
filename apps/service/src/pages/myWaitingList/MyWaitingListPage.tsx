import { useEffect, useState } from "react";

//components
import * as S from "./MyWaitingListPage.styled";
import WaitingCard from "@components/waitingCard/WaitingCard";

// types
import { Waiting } from "@interfaces/waiting";

// dummy
import { useGetWaitings } from "@hooks/apis/waiting";
import Spinner from "@components/spinner/Spinner";

const MyWaitingListPage = () => {
  const { data, isLoading, isError } = useGetWaitings();
  const [waitings, setWaitings] = useState<Waiting[]>([]);

  useEffect(() => {
    setWaitings(data || []);
  }, [isLoading, isError, data]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <S.MyWaitingListPageWrapper>
      {waitings.map((item, index) => (
        <WaitingCard key={index} waiting={item} />
      ))}
    </S.MyWaitingListPageWrapper>
  );
};

export default MyWaitingListPage;
