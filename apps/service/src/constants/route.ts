export const ROUTE = {
  DEFAULT: "/",
  BOOTH_DETAIL: (boothID: number | string = ":boothId") => `/booth/${boothID}`,
  LOGIN: `/login`,

  WAITING_CHECK: `/check`,
  WAITING_DETAIL: (waitingID: number | string = ":waitingID") =>
    `/waiting/${waitingID}`,
  MY_WAITING: `/my-waiting`,
  SETTING: `/setting`,
};
