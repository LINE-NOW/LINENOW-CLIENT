import { WaitingStatus } from "@linenow-types/status";
import { Booth } from "./booth";

type BoothInfo = Pick<Booth, "boothID" | "name" | "location" | "thumbnail"> &
  Partial<Pick<Booth, "latitude" | "longitude" | "description">>;

export interface Waiting
  extends Pick<
    BoothWaiting,
    "waitingID" | "confirmedAt" | "waitingStatus" | "waitingTeamsAhead"
  > {
  waitingNum: number;
  personCount: number; // person_num

  createdAt: string;
  confirmedAt?: string;
  enteredAt?: string; // 입장 시간
  canceledAt?: string; // 취소시간

  booth: BoothInfo;
}

export interface BoothWaiting {
  boothID: number;
  waitingID: number;
  waitingTeamsAhead: number;
  waitingStatus: WaitingStatus;

  confirmedAt?: string;
}
