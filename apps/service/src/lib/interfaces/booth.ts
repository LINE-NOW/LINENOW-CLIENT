import { BoothStatus } from "@linenow-types/status";

export interface BoothImage {
  imageID: number;
  imageURL: string;
}

export interface Menu {
  menuID: number;
  name: string;
  price: number;
}

export interface Booth {
  boothID: number;
  name: string;
  description: string;
  thumbnail?: string;
  notice: string;

  location: string;
  latitude: string;
  longitude: string;

  images: BoothImage[];
  menus: Menu[];

  openTime: string;
  operatingStatus: BoothStatus;
  boothStartTime: string;
  totalWaitingTeams?: number;
}

export interface BoothThumbnail
  extends Pick<
    Booth,
    | "boothID"
    | "name"
    | "description"
    | "location"
    | "latitude"
    | "longitude"
    | "thumbnail"
    | "operatingStatus"
  > {}
