import WaitingCard from "@components/waitingCard/WaitingCard";

export const dummyWaitings: React.ComponentProps<typeof WaitingCard>[] = [
  {
    waitingID: 1,
    waitingStatus: "waiting",
    waitingTeamsAhead: 2,
    booth: {
      thumbnail: "더미 데이터",
      boothID: 0,
      name: "더미 데이터",
      location: "더미 위치",
      description: "난 읽기 쉬운 맘이얌..",
    },
    arrivalarrivalDueTime: "",
  },
  {
    waitingID: 2,
    waitingStatus: "waiting",
    waitingTeamsAhead: 2,
    booth: {
      thumbnail: "더미 데이터2",
      boothID: 0,
      name: "더미 데이터",
      location: "더미 위치",
      description: "난 읽기 쉬운 맘이얌..",
    },
    arrivalarrivalDueTime: "",
  },
];
