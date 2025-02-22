import { WaitingStatus } from "@linenow-types/status";

export interface WaitingCheck {
  id?: number;
  booth?: number;
  username?: string;
  party_size?: number;
  waiting_status?: WaitingStatus;
  ready_to_confirm_at?: string | null;
  confirmed_at?: string | null;
  canceled_at?: string | null;
}
