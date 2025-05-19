export type WaitingStatus =
  | "waiting"
  | "canceled"
  | "entered"
  | "entering"
  // | "not_waiting"
  | "time_over";

export type ManagerActionStatus = "call" | "confirm" | "cancel";

export type BoothStatus = "operating" | "paused";

export type WaitingStatusParams =
  | "entering"
  | "waiting"
  | "entered"
  | "canceled"
  | "time_over"
  | undefined;
