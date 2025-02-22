export type WaitingStatus =
  | "check"
  | "waiting"
  | "ready_to_confirm"
  | "confirmed"
  | "arrived"
  | "canceled"
  | "time_over_canceled";

export type BoothStatus = "not_started" | "operating" | "finished" | "paused";
