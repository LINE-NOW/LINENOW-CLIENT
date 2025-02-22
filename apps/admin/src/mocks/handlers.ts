import { delay, http, HttpResponse } from "msw";

//dummy
import {
  dummyArrivedResponse,
  dummyCallingResponse,
  dummyCanceledResponse,
  dummyWaitingResponse,
  dummyWaitingsResponse,
} from "./dummy/waitings";

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

export const handlers = [
  http.get(
    "/api/v1/manager/booths/waitings",
    getDelayedResponse(dummyWaitingsResponse)
  ),
  http.get(
    "/api/v1/manager/booths/waiting",
    getDelayedResponse(dummyWaitingResponse)
  ),
  http.get(
    "/api/v1/manager/booths/calling",
    getDelayedResponse(dummyCallingResponse)
  ),
  http.get(
    "/api/v1/manager/booths/arrived",
    getDelayedResponse(dummyArrivedResponse)
  ),
  http.get(
    "/api/v1/manager/booths/canceled",
    getDelayedResponse(dummyCanceledResponse)
  ),

  http.post(
    "/api/v1/manager/booths/",
    getDelayedResponse(dummyCanceledResponse)
  ),

  http.get(
    "/api/v1/manager/booth",
    getDelayedResponse({ id: 1, name: "레전드라인나우", status: "not_started" })
  ),

  // POST 로그인 API 테스트용
  http.post("/api/v1/manager/login", async ({ request }) => {
    const data = {
      accessToken: "123456789",
    };

    const result: any = await request.json();
    const id = result?.id;

    // 고유번호가 '12345'일 경우 성공
    if (id === "12345") {
      return new HttpResponse(JSON.stringify(data), {
        status: 200,
      });
    } else {
      return new HttpResponse(null, {
        status: 400,
        statusText: "fail",
      });
    }
  }),

  // POST 로그아웃 API 테스트용
  http.post("/api/v1/manager/logout", async () => {
    // 로그아웃 시 로컬 스토리지에서 토큰을 삭제한다고 가정
    const accessToken = sessionStorage.getItem("accessToken");

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

  http.post(
    "/api/v1/manager/waitings/:waitingID/action",
    async ({ params }) => {
      const waitingID = params.waitingID;

      // 요청 처리에 따라 적절한 응답 반환 (예: 성공 또는 오류)
      if (waitingID) {
        // 예를 들어, 요청이 성공적으로 처리되었다고 가정
        return new HttpResponse(
          JSON.stringify({
            status: "success",
            code: 200,
            message: "Action processed successfully.",
          })
        );
      } else {
        return new HttpResponse(null, {
          status: 404,
          statusText: "Waiting ID not found",
        });
      }
    }
  ),

  http.post("/api/v1/manager/booth/status", async () => {
    // 요청 처리에 따라 적절한 응답 반환 (예: 성공 또는 오류)

    return new HttpResponse(
      JSON.stringify({
        status: "success",
        code: 200,
        message: "Action processed successfully.",
      })
    );
  }),

  http.post("/api/v1/manager/booth/resume", async () => {
    return new HttpResponse(
      JSON.stringify({
        status: "success",
        code: 200,
        message: "Action processed successfully.",
      })
    );
  }),

  http.post("/api/v1/manager/booth/pause", async () => {
    return new HttpResponse(
      JSON.stringify({
        status: "success",
        code: 200,
        message: "Action processed successfully.",
      })
    );
  }),
];
