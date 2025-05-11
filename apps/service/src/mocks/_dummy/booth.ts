import { _Booth } from "@apis/domains/models";

export const dummyBooths: _Booth[] = [
  {
    booth_id: 1,
    booth_name: "라인나우 테스트",
    thumbnail:
      "https://i.namu.wiki/i/1JtZjbflwWbAwHBCu1xljdQfkvvXWD0UiLACawbjBK2972tnqsrybHFaGuq0WYKE76wSKOitmkiqvYH2Z8OYi3g_MEv2xQ1MqqA0KMXNeIpjZxOJdTBM8uomUqWXYxKbyHO8M8vCtgeRcCd2NqPoGQ.webp",
    booth_description: "라인나우 테스트 부스 입니다.",
    booth_start_time: "2025-04-22T13:54:00",
    booth_end_time: "2025-04-22T13:54:00",
    booth_notice: "라인나우 파이팅!\n우리 모두 힘을 내 보아요 ^^",
    booth_location: "동국대학교 팔정도",
    booth_latitude: "37.55893664",
    booth_longitude: "126.9987376",
    operating_status: "operating",
    booth_menu_info: [
      {
        menu_id: 1,
        menu_name: "라인나우 튀김",
        menu_price: 20000,
      },
      {
        menu_id: 2,
        menu_name: "라인나우 고추장 찌개",
        menu_price: 1900,
      },
    ],
    booth_image_info: [
      {
        booth_image_id: 1,
        booth_image: "",
      },
      {
        booth_image_id: 2,
        booth_image: "",
      },
    ],
  },
  {
    booth_id: 2,
    booth_name: "프론트의 더미데이터",
    thumbnail:
      "https://i.namu.wiki/i/YUl8OYhqGEIkaSdhdBVKfG1HIc-zsq3-1-2JLHKjroWUbWEVV5NSoAUjgJHWuKvbb72P9K1VrwQcK0AN8P86ew.webp",
    booth_description: "지금은 회의중이에요",
    booth_start_time: "2025-04-22T13:54:00",
    booth_end_time: "2025-04-22T13:54:00",
    booth_notice: "프팀 화이팅!\n세호 찬주 서현 모두 힘을 내 보아요 ^^",
    booth_location: "동국대학교 팔정도",
    booth_latitude: "37.55893664",
    booth_longitude: "126.9987376",
    operating_status: "operating",
    booth_menu_info: [
      {
        menu_id: 1,
        menu_name: "프론트만두",
        menu_price: 20000,
      },
      {
        menu_id: 2,
        menu_name: "프론트버섯볶음",
        menu_price: 1900,
      },
    ],
    booth_image_info: [
      {
        booth_image_id: 1,
        booth_image: "",
      },
      {
        booth_image_id: 2,
        booth_image: "",
      },
      {
        booth_image_id: 3,
        booth_image: "",
      },
    ],
  },
];
