//소켓에서 받아온 데이터를 Waiting 타입에 맞게 매핑하는 유틸

import { Waiting } from "@interfaces/waiting";

export const mapToWaiting = (raw: any): Waiting => ({
  waitingID: raw.waiting_id,
  waitingNum: raw.waiting_num,
  personCount: raw.person_num,
  createdAt: raw.created_at,
  confirmedAt: raw.confirmed_at,
  canceledAt: raw.canceled_at,
  waitingStatus: raw.waiting_status,
  booth: {
    boothID: raw.booth_info?.booth_id,
    name: raw.booth_info?.booth_name,
    location: raw.booth_info?.booth_location,
    thumbnail: raw.booth_info?.booth_thumbnail,
  },
  waitingTeamsAhead: raw.waitingsTeamsAhead ?? [],
});
