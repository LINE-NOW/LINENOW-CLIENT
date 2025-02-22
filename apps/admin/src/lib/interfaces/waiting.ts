import { WaitingStatus } from "@linenow-types/status";
import { User } from "./user";

export interface Waiting {
  waitingID: number;
  waitingStatus: WaitingStatus;

  partySize: number;

  user: User;

  confirmDueTime?: string;
  arrivalDueTime?: string;

  registeredAt: string;
  // readyToConfirmAt?: string;
  // confirmedAt?: string;
  // canceledAt?: string;
}
