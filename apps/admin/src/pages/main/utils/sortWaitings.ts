import { Waiting } from "@interfaces/waiting";

const sortWaitings = (list: Waiting[]): Waiting[] => {
  const statusOrder: Record<string, number> = {
    entering: 0, // 입장 중
    waiting: 1, // 대기 중
    canceled: 2, // 취소
    time_over: 2, // 시간 초과
    entered: 3, // 입장 완료
  };

  return [...list].sort((a, b) => {
    const statusA = statusOrder[a.waitingStatus] ?? 999;
    const statusB = statusOrder[b.waitingStatus] ?? 999;

    if (statusA !== statusB) {
      return statusA - statusB;
    }

    if (a.waitingStatus === "waiting" || a.waitingStatus === "entering") {
      // 오래된 순
      return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
    }

    if (
      a.waitingStatus === "entered" ||
      a.waitingStatus === "canceled" ||
      a.waitingStatus === "time_over"
    ) {
      // 최신 순
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    }
    return 0;
  });
};

export default sortWaitings;
