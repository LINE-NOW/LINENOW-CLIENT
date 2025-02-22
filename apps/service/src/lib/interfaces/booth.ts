import { BoothStatus, WaitingStatus } from "@linenow-types/status";

export interface BoothImage {
  image: string;
}

export interface Menu {
  name: string;
  price: string;
}

export interface Booth {
  boothID: number;
  name: string;
  description?: string;
  location: string;
  caution: string;

  images: BoothImage[];
  menu: Menu[];

  openTime: string;
  closeTime: string;

  isOperated: BoothStatus;

  waitingCount: number;
  totalWaitingTeams: number;
  waitingTeamsAhead: number;

  isWaiting: boolean;
  waitingID?: number;
  waitingStatus: WaitingStatus;
}

export interface BoothSummary
  extends Pick<Booth, "boothID" | "name" | "description" | "location"> {
  thumbnail: string;
}

export interface BoothsElement
  extends BoothSummary,
    Pick<
      Booth,
      "isOperated" | "waitingCount" | "totalWaitingTeams" | "isWaiting"
    > {
  waitingStatus: WaitingStatus | null;
}

export interface Menu {
  name: string;
  price: string;
}
