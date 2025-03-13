import { WaitingStatus } from "@linenow-types/status";
import { BoothSummary } from "@interfaces/booth";

export interface WaitingSummary {}

export interface Waiting {
  waitingID: number;
  waitingStatus: WaitingStatus;

  waitingCount: number;
  totalWaitingTeams: number;
  waitingTeamsAhead: number;

  partySize: number;

  confirmDueTime: string;
  arrivalarrivalDueTime: string;

  booth: BoothSummary;

  // registeredAt: string;
  readyToConfirmAt?: string;
  // confirmedAt?: string;
  // canceledAt?: string;
}
