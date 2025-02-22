import {
  GetBoothStatus,
  GetWaitingCountsResponse,
  PostBoothStatusRequest,
  PostWaitingsActionRequest,
  transtromGetBoothStatus,
} from "@apis/domains/boothManaging/_interfaces";
import { getResponse, postNoResponse } from "@apis/instance";

import { Booth } from "@interfaces/booth";

export const getWaitingsCounts = async () => {
  try {
    const response = getResponse<GetWaitingCountsResponse>(
      `/api/v1/manager/waiting-counts`
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export const postWaitingsAction = async (
  waitingID: number,
  requestBody: PostWaitingsActionRequest
) => {
  try {
    await postNoResponse<PostWaitingsActionRequest>(
      `/api/v1/manager/waitings/${waitingID}/action`,
      requestBody
    );
  } catch (error) {
    // TODO: -분기처리 세세하게
    throw error;
  }
};

export const getBoothStatus = async (): Promise<Booth> => {
  const response = await getResponse<GetBoothStatus[]>(`/api/v1/manager/booth`);
  if (!response) {
    console.log("error");
    throw new Error("Booth status 정보를 가져오는데 실패했습니다.");
  }

  return transtromGetBoothStatus(response[0]);
};

export const postBoothStatus = async (requestBody: PostBoothStatusRequest) => {
  try {
    await postNoResponse<PostBoothStatusRequest>(
      `/api/v1/manager/booth/status`,
      requestBody
    );
  } catch (error) {
    // TODO: -분기처리 세세하게
    throw error;
  }
};

export const postBoothOperation = async (status: "pause" | "resume") => {
  try {
    await postNoResponse<null>(`/api/v1/manager/booth/${status}`, null);
  } catch (error) {
    // TODO: -분기처리 세세하게
    throw error;
  }
};
