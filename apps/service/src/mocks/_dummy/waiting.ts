import { _Waiting } from "@apis/domains/models";

export const dummyWaitings: _Waiting[] = [
  {
    waiting_id: 1,
    user_id: 1,
    booth_id: 1,
    person_num: 3,
    waiting_status: "waiting",
    total_waiting_teams: 4,
    waiting_teams_ahead: 3,
    waiting_num: 4,
    created_at: "",
    confirmed_at: "",
    canceled_at: "",
    arrival_at: "",
  },
  {
    waiting_id: 1,
    user_id: 1,
    booth_id: 2,
    person_num: 3,
    waiting_status: "waiting",
    total_waiting_teams: 4,
    waiting_teams_ahead: 3,
    waiting_num: 4,
    created_at: "",
    confirmed_at: "",
    canceled_at: "",
    arrival_at: "",
  },
];
