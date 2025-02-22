export const dummyWaitingsResponse = [
  {
    id: 1,
    waiting_status: "waiting",
    waiting_teams_ahead: 5,
    party_size: 4,
    confirm_due_time: undefined, // Not applicable
    arrival_due_time: undefined, // Not applicable
    booth: {
      booth_id: 101,
      name: "아늑한 공간",
      description: "소규모 모임을 위한 아늑한 부스.",
      location: "1층, 입구 근처",
      thumbnail:
        "https://image.mediapen.com/news/202103/news_605667_1614652226_m.jpg",
    },
  },
  {
    id: 2,
    waiting_status: "ready_to_confirm",
    waiting_teams_ahead: 0,
    party_size: 6,
    confirm_due_time: "2024-10-01T14:45:00Z", // Only applicable here
    arrival_due_time: undefined, // Not applicable
    booth: {
      booth_id: 102,
      name: "모임의 숲",
      description: "대규모 파티에 적합합니다.",
      location: "2층, 카페 옆",
      thumbnail:
        "https://image.mediapen.com/news/202103/news_605667_1614666790_m.jpg",
    },
  },
  {
    id: 3,
    waiting_status: "confirmed",
    waiting_teams_ahead: 1,
    party_size: 2,
    confirm_due_time: "2024-10-01T15:00:00Z", // Both applicable here
    arrival_due_time: "2024-10-01T15:05:00Z", // Arrival time
    booth: {
      booth_id: 103,
      name: "경치 좋은 전망대",
      description: "넓고 좋은 전망.",
      location: "옥상",
      thumbnail:
        "https://image.mediapen.com/news/202103/news_605667_1614652226_m.jpg",
    },
  },
  {
    id: 4,
    waiting_status: "waiting",
    waiting_teams_ahead: 4,
    party_size: 3,
    confirm_due_time: undefined, // Not applicable
    arrival_due_time: undefined, // Not applicable
    booth: {
      booth_id: 104,
      name: "테크 허브",
      description: "현대적인 디자인과 기술 편의시설.",
      location: "3층, 회의실",
      thumbnail:
        "https://image.mediapen.com/news/202103/news_605667_1614652226_m.jpg",
    },
  },
  {
    id: 5,
    waiting_status: "confirmed",
    waiting_teams_ahead: 0,
    party_size: 2,
    confirm_due_time: "2024-10-01T15:20:00Z", // Both applicable here
    arrival_due_time: "2024-10-01T15:25:00Z", // Arrival time
    booth: {
      booth_id: 105,
      name: "로맨틱 리트리트",
      description: "로맨틱한 저녁을 위한 아늑한 공간.",
      location: "정원 지역",
      thumbnail:
        "https://image.mediapen.com/news/202103/news_605667_1614652226_m.jpg",
    },
  },
  {
    id: 6,
    waiting_status: "waiting",
    waiting_teams_ahead: 3,
    party_size: 5,
    confirm_due_time: undefined, // Not applicable
    arrival_due_time: undefined, // Not applicable
    booth: {
      booth_id: 106,
      name: "가족 놀이존",
      description: "가족 친화적인 부스와 게임.",
      location: "1층, 놀이터 근처",
      thumbnail:
        "https://image.mediapen.com/news/202103/news_605667_1614652226_m.jpg",
    },
  },
  {
    id: 7,
    waiting_status: "confirmed",
    waiting_teams_ahead: 1,
    party_size: 4,
    confirm_due_time: "2024-10-01T15:40:00Z", // Both applicable here
    arrival_due_time: "2024-10-01T15:45:00Z", // Arrival time
    booth: {
      booth_id: 107,
      name: "비즈니스 라운지",
      description: "비즈니스 미팅을 위한 조용한 공간.",
      location: "2층, 비즈니스 센터",
      thumbnail:
        "https://image.mediapen.com/news/202103/news_605667_1614652226_m.jpg",
    },
  },
  {
    id: 8,
    waiting_status: "waiting",
    waiting_teams_ahead: 2,
    party_size: 8,
    confirm_due_time: undefined, // Not applicable
    arrival_due_time: undefined, // Not applicable
    booth: {
      booth_id: 108,
      name: "오픈 스카이 테라스",
      description: "사회적 이벤트를 위한 야외 부스.",
      location: "옥상",
      thumbnail:
        "https://image.mediapen.com/news/202103/news_605667_1614652226_m.jpg",
    },
  },
  {
    id: 9,
    waiting_status: "canceled",
    waiting_teams_ahead: 5,
    party_size: 10,
    confirm_due_time: undefined, // Not applicable
    arrival_due_time: undefined, // Not applicable
    booth: {
      booth_id: 109,
      name: "테마 원더랜드",
      description: "특별한 행사에 적합한 테마 장식.",
      location: "3층, 이벤트 홀",
      thumbnail:
        "https://image.mediapen.com/news/202103/news_605667_1614652226_m.jpg",
    },
  },
  {
    id: 10,
    waiting_status: "waiting",
    waiting_teams_ahead: 3,
    party_size: 2,
    confirm_due_time: undefined, // Not applicable
    arrival_due_time: undefined, // Not applicable
    booth: {
      booth_id: 110,
      name: "프라이빗 오아시스",
      description: "독점적인 파티를 위한 개인 부스.",
      location: "1층, VIP 지역",
      thumbnail:
        "https://image.mediapen.com/news/202103/news_605667_1614652226_m.jpg",
    },
  },
];

export const dummyNowWaitingsResponse = dummyWaitingsResponse.filter(
  (item) =>
    item.waiting_status === "waiting" ||
    item.waiting_status === "confirmed" ||
    item.waiting_status === "ready_to_confirm"
);
