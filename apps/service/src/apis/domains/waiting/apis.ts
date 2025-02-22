// api method
import { getResponse, postResponse } from "@apis/instance";

// types
import { Waiting } from "@interfaces/waiting";
import {
  GetWaitingResponse,
  GetWaitingsResponse,
  transformGetWaitingResponse,
  transformGetWaitingsResponse,
} from "./_interfaces";
import { WaitingCheck } from "@interfaces/waitingCheck";

// get waiting : - 나의 대기 상세 (줄서기 상세)
export interface GetWaitingRequest {
  waitingID: number;
}

export const getWaiting = async ({
  ...props
}: GetWaitingRequest): Promise<Waiting | null> => {
  const response = await getResponse<GetWaitingResponse>(
    `api/v1/waitings/${props.waitingID}`
  );
  return response ? transformGetWaitingResponse(response) : null; // 변환 후 반환
};

// get waitings : - 나의 대기 리스트

export const getWaitings = async (): Promise<Waiting[]> => {
  const response = await getResponse<GetWaitingsResponse>(`api/v1/waitings`);
  return response ? transformGetWaitingsResponse(response) : []; // 변환 후 반환
};

export const getNowWaitings = async (): Promise<Waiting[]> => {
  const response = await getResponse<GetWaitingsResponse>(
    `api/v1/waitings/now-waitings`
  );
  return response ? transformGetWaitingsResponse(response) : []; // 변환 후 반환
};

//post waitings - 대기 줄서기 등록

export interface RegisterWaitingRequest {
  boothId: number;
  party_size: number;
}

// 대기 줄서기 등록
export const postWaitingRegister = async ({
  boothId,
  party_size,
}: RegisterWaitingRequest): Promise<WaitingCheck | null> => {
  const response = await postResponse<WaitingCheck>(
    `/api/v1/waitings/${boothId}/register`,
    { party_size: party_size }
  );

  return response;
};
