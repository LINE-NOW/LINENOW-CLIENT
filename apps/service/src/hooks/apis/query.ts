import { QueryKey } from "@tanstack/react-query";

export const QUERY_KEY = {
  // booth
  BOOTHS: (): QueryKey => ["booths"],
  BOOTHS_COUNT: (): QueryKey => ["booths-count"],
  BOOTHS_WAITING: (): QueryKey => ["booths-waiting"],
  BOOTHS_LOCATION: (): QueryKey => ["booths-location"],

  BOOTH: (id: number): QueryKey => ["booth", id],
  BOOTH_WAITING: (id: number): QueryKey => ["booth-waiting", id],

  // wiaitng
  WAITINGS: (type: "waiting" | "finished" = "waiting") => [`waitings-${type}`],
  WAITINGS_COUNT: (): QueryKey => [`waitings-waiting-count`],

  ALL_WAITINGS: (): QueryKey => ["waiting", "all"],
  ALL_ENTERINGS: (): QueryKey => ["entering", "all"],

  WAITING: (id: number): QueryKey => ["waiting", id],
  WAITING_BOOTH: (id: number): QueryKey => ["waiting_booth", id],
};
