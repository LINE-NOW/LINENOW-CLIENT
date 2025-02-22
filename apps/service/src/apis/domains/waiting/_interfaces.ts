import { postResponseNew } from "@apis/instance";
import { Waiting } from "@interfaces/waiting";
import { WaitingStatus } from "@linenow-types/status";

export interface GetWaitingResponse {
  id: number;
  // username:string;
  booth: Booth;
  party_size: number;
  waiting_status: WaitingStatus;
  // registered_at: string;
  // ready_to_confirm_at?: string;
  // confirmed_at?: string;
  // canceled_at?: string;
  waiting_teams_ahead: number;
  total_waiting_teams: number;
  confirm_due_time: string;
  arrival_due_time: string;
}

interface Booth {
  booth_id: number;
  name: string;
  description: string;
  location: string;
  thumbnail: string;
}

export interface GetWaitingsResponse extends Array<GetWaitingResponse> {}

export const transformGetWaitingResponse = (
  response: GetWaitingResponse
): Waiting => {
  return {
    waitingID: response.id,
    waitingStatus: response.waiting_status,
    waitingTeamsAhead: response.waiting_teams_ahead,
    totalWaitingTeams: response.total_waiting_teams,

    partySize: response.party_size,

    confirmDueTime: response.confirm_due_time,
    arrivalarrivalDueTime: response.arrival_due_time,

    booth: {
      boothID: response.booth.booth_id,
      name: response.booth.name,
      description: response.booth.description,
      location: response.booth.location,
      thumbnail: response.booth.thumbnail,
    },

    // registeredAt: response.registered_at,
    // readyToConfirmAt: response.ready_to_confirm_at,
    // confirmedAt: response.confirmed_at,
    // canceledAt: response.canceled_at,
  };
};

export const transformGetWaitingsResponse = (
  response: GetWaitingsResponse
): Waiting[] => {
  return response.map(transformGetWaitingResponse);
};

// 대기 줄서기 등록 요청 인터페이스
export interface RegisterWaitingRequest {
  boothID: number;
  partySize: number;
}

interface PostWaitingRegisterBody {
  party_size: number;
}

export interface PostWaitingRegisterResponse {
  id: number;
}

// 대기 줄서기 등록 함수
export const postWaitingRegister = async ({
  ...props
}: RegisterWaitingRequest): Promise<PostWaitingRegisterResponse | null> => {
  const response = await postResponseNew<
    PostWaitingRegisterBody,
    PostWaitingRegisterResponse
  >(`api/v1/waitings/${props.boothID}/register`, {
    party_size: props.partySize,
  });

  if (response) {
    return response;
  } else {
    throw new Error("post error");
  }
};
