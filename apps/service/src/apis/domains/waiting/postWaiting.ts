import { postResponse } from "@apis/instance";
import { GetWaitingBoothResponse } from "./getWaitingBooth";

export interface RegisterWaitingRequest {
  booth_id: number;
  person_num: number;
}

// 대기 줄서기 등록
export const postWaitingRegister = async ({
  booth_id,
  person_num,
}: RegisterWaitingRequest): Promise<GetWaitingBoothResponse> => {
  const response = await postResponse<
    RegisterWaitingRequest,
    GetWaitingBoothResponse | null
  >(`/api/v1/waiting`, { booth_id, person_num });
  if (!response) {
    throw new Error("서버에서 대기 등록 응답이 없습니다.");
  }
  return response;
};
