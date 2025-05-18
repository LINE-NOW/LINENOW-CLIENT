import { WaitingStatus } from "@linenow-types/status";
import { User } from "./user";

export interface Waiting {
  waitingID: number;
  waitingStatus: WaitingStatus;
  waitingNum: number;
  personNum: number;

  user: User;

  confirmDueTime?: string;
  arrivalDueTime?: string;

  createdAt: string;
  confirmedAt: string | null;
  canceledAt?: string;
}
