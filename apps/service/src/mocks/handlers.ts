import { delay, http, HttpResponse } from "msw";

// dummy 데이터 import
import {
  dummyNowWaitingsResponse,
  dummyWaitingsResponse,
} from "./dummy/waitings";
import { dummyBoothListResponse } from "./dummy/boothList";
import { dummyBoothResponse } from "./dummy/booth";
import { dummyWaitingDetailResponse } from "./dummy/waitingDetail";

const COMMON_DELAY = 0;

const getDelayedResponse = (responseData: any) => {
  return async () => {
    await delay(COMMON_DELAY);
    const response = {
      status: "success",
      code: 200,
      data: responseData,
      message: "User successfully deleted",
    };
    return new Response(JSON.stringify(response), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
};

const postDelayedResponse = (message: string) => {
  return async () => {
    await delay(COMMON_DELAY);
    return HttpResponse.json({
      status: true,
      message: message,
      code: 200,
    });
  };
};

const deleteDelayedResponse = () => {
  return async () => {
    await delay(COMMON_DELAY);
    return HttpResponse.json({
      status: true,
      message: "User successfully deleted",
      code: 200,
    });
  };
};

interface RegisterWaitingRequest {
  party_size: number;
}

export const handlers = [
  http.get("/api/v1/waitings", getDelayedResponse(dummyWaitingsResponse)),
  http.get(
    "/api/v1/waitings/now-waitings",
    getDelayedResponse(dummyNowWaitingsResponse)
  ),

  http.delete("/api/v1/deleteID", deleteDelayedResponse()),
  http.post("/api/v1/logout", async () => {
    // 로그아웃 시 로컬 스토리지에서 토큰을 삭제한다고 가정
    // const accessToken = localStorage.getItem('accessToken');
    const accessToken = "12345";

    // 토큰이 존재할 경우 로그아웃 성공 처리
    if (accessToken) {
      return new HttpResponse(
        JSON.stringify({ message: "Logout successful" }),
        {
          status: 200,
        }
      );
    } else {
      return new HttpResponse(null, {
        status: 400,
        statusText: "Logout failed",
      });
    }
  }),

  http.get("/api/v1/booths", getDelayedResponse(dummyBoothListResponse)),
  http.get(`/api/v1/booths/:boothId`, getDelayedResponse(dummyBoothResponse)),
  http.get(
    `/api/v1/waitings/:waitingID`,
    getDelayedResponse(dummyWaitingDetailResponse)
  ),

  http.post(
    "/api/v1/waitings/:waitingID/cancel",
    postDelayedResponse(`성공적으로 대기가 취소됐습니다.`)
  ),

  http.post(
    "/api/v1/waitings/:boothId/register",
    async ({ request, params }) => {
      const { boothId } = params;

      // 요청 본문에서 party_size 가져오기
      const requestBody = (await request.json()) as RegisterWaitingRequest;

      if (typeof requestBody.party_size !== "number") {
        return new Response(
          JSON.stringify({
            status: "error",
            message: "Invalid request body",
            code: 400,
            data: null,
          }),
          {
            status: 400,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      }

      return new Response(
        JSON.stringify({
          status: "success",
          message: "대기 줄서기 등록 완료",
          code: 200,
          data: {
            id: 3,
            booth: Number(boothId),
            username: "user123",
            party_size: requestBody.party_size,
            waiting_status: "waiting",
            ready_to_confirm_at: null,
            confirmed_at: null,
            canceled_at: null,
          },
        }),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }
  ),
];
