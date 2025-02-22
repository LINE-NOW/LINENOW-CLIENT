export const dummyWaitingDetailResponse = {
  status: "success",
  message: "My Waiting details fetched successfully.",
  code: 200,
  data: {
    id: 3,
    username: "하잉",
    booth: {
      booth_id: 3,
      name: "영심",
      description:
        "파란 하늘 아래서 너와 함께 걸었지  \r\n맑은 바람이 불고 우리의 웃음소리  \r\n시간이 멈춘 듯한 이 순간이  \r\n영원히 계속될 것만 같아\r\n\r\n[후렴]  \r\n하늘을 걷다, 너와 나  \r\n우리의 발걸음은 멈추지 않아  \r\n함께하는 이 길 끝까지  \r\n하늘을 걷다, 너와 나",
      location: "명진관",
      thumbnail:
        "http://127.0.0.1:8000/media/event_1/booth_1/4%E1%84%92%E1%85%A9%E1%84%89%E1%85%A5%E1%86%AB%E1%84%90%E1%85%A9%E1%86%AB-%E1%84%85%E1%85%A9%E1%84%80%E1%85%A9.png",
    },
    party_size: 2,
    waiting_status: "canceled",
    registered_at: "2024-10-01T22:38:33.120864",
    ready_to_confirm_at: null,
    confirmed_at: null,
    canceled_at: "2024-10-01T23:32:10.843250",
    waiting_teams_ahead: 2,
    total_waiting_teams: 3,
    //TODO : - 세호님 변경사항 반영해주세요
    confirm_due_time: "00:00",
    arrival_due_time: "00:00",
  },
};
