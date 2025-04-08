import { WaitingCardProps } from "@components/waitingCard/WaitingCard";

export const dummyWaitingsResponse: WaitingCardProps[] = [
  {
    waitingID: 1,
    waitingStatus: "waiting",
    waitingTeamsAhead: 2,
    booth: {
      thumbnail:
        "https://image.mediapen.com/news/202103/news_605667_1614652226_m.jpg",
      boothID: 1,
      name: "가나다라",
      location: "가나다라마바사",
      description: "난 읽기 쉬운 맘이얌..",
    },
    arrivalarrivalDueTime: "",
  },
];

export const dummyFinishedWaitingsResponse: WaitingCardProps[] = [
  {
    waitingID: 1,
    waitingStatus: "canceled",
    waitingTeamsAhead: 2,
    booth: {
      thumbnail:
        "https://image.mediapen.com/news/202103/news_605667_1614652226_m.jpg",
      boothID: 1,
      name: "가나다라",
      location: "가나다라마바사",
      description: "난 읽기 쉬운 맘이얌..",
    },
    arrivalarrivalDueTime: "",
  },
  {
    waitingID: 1,
    waitingStatus: "canceled",
    waitingTeamsAhead: 2,
    booth: {
      thumbnail:
        "https://image.mediapen.com/news/202103/news_605667_1614652226_m.jpg",
      boothID: 1,
      name: "가나다라",
      location: "가나다라마바사",
      description: "난 읽기 쉬운 맘이얌..",
    },
    arrivalarrivalDueTime: "",
  },
];
