import {
  GetBoothStatus,
  BoothInfo,
  PostBoothStatusRequest,
  transtromGetBoothStatus,
} from "@apis/domains/boothManaging/_interfaces";
import { getResponse, postResponse } from "@apis/instance";

import { Booth } from "@interfaces/booth";

export const getWaitingsCounts = async () => {
  try {
    const response = getResponse<BoothInfo>(
      `/api/v1/manager/booth/status-count`
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export const postWaitingsAction = async (
  waitingID: number,

  action: string
) => {
  try {
    await postResponse<null, null>(
      `/api/v1/waiting/${waitingID}/${action}`,
      null
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
    await postResponse<PostBoothStatusRequest, null>(
      `/api/v1/manager/booth/operating-status`,
      requestBody
    );
  } catch (error) {
    // TODO: -분기처리 세세하게
    throw error;
  }
};

export const postBoothOperation = async (status: "pause" | "resume") => {
  try {
    await postResponse<null, null>(`/api/v1/manager/booth/${status}`, null);
  } catch (error) {
    // TODO: -분기처리 세세하게
    throw error;
  }
};
