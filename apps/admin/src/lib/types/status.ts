export type WaitingStatus =
  | "waiting"
  | "ready_to_confirm"
  | "confirmed"
  | "arrived"
  | "canceled"
  | "time_over_canceled";

export type ManagerActionStatus = "call" | "confirm" | "cancel";

export type BoothStatus = "operating" | "paused";

export type WaitingStatusParams =
  | "calling"
  | "waiting"
  | "arrived"
  | "canceled"
  | undefined;
