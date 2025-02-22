import { BoothStatus } from "@linenow-types/status";

export interface Booth {
  boothID: number;
  status: BoothStatus;
  name: string;
}
