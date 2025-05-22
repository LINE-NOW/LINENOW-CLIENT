import { Waiting } from "@interfaces/waiting";

const sortWaitings = (list: Waiting[]): Waiting[] => {
  const statusOrder: Record<string, number> = {
    entering: 0, // 입장 중
    waiting: 1, // 대기 중
    entered: 2, // 입장 완료
    canceled: 3, // 취소
    time_over: 3, // 시간 초과, 취소와 동일 순서
  };

  return [...list].sort((a, b) => {
    const statusA = statusOrder[a.waitingStatus] ?? 999;
    const statusB = statusOrder[b.waitingStatus] ?? 999;

    if (statusA !== statusB) {
      return statusA - statusB;
    }

    return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
  });
};

export default sortWaitings;
