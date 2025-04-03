export type WaitingStatus =
  | "waiting" // 대기 중
  | "entering" // 입장 중
  | "canceled" // 대기 취소
  | "time_over" // 대기 시간 초과
  | "entered" // 입장 완료
  | "not_waiting"; // 대기중이 아님

export type BoothStatus =
  | "not_started" //부스 시작 전
  | "operating" // 부스 운영 중
  | "paused" // 부스 운영 중지
  | "finished"; // 부스 운영 종료
