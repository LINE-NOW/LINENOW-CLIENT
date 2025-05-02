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
  logitude: string;

  images: BoothImage[];
  menus: Menu[];

  openTime: string;
  operatingStatus: BoothStatus; // 부스의 운영 상태
}

export interface BoothThumbnail
  extends Pick<
    Booth,
    | "boothID"
    | "name"
    | "description"
    | "location"
    | "latitude"
    | "logitude"
    | "thumbnail"
    | "operatingStatus"
  > {}
