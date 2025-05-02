import { delay, http } from "msw";

import { dummyBooths } from "./_dummy/booth";
import { dummyWaitings } from "./_dummy/waiting";
import { _Booth } from "@apis/domains/models";

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

export const handlersV2 = [];

export const booth = [
  http.get("/api/v1/booths/count", getDelayedResponse(dummyBooths.length)),
  http.get("/api/v1/booths", getDelayedResponse(dummyBooths)),
  http.get("/api/v1/booths-waiting", getDelayedResponse(dummyWaitings)),
  // 부스 상세
  http.get("/api/v1/booths/:id", async ({ params }) => {
    const boothID = Number(params.id);
    const targetBooth = dummyBooths.find((booth) => booth.booth_id === boothID);

    if (!targetBooth) return error404;
    return getDelayedResponse(targetBooth)();
  }),
];

export const waiting = [
  http.get(
    "/api/v1/waiting/my-waiting",
    getDelayedResponse(
      dummyWaitings.map((waiting) => {
        const targetBooth = dummyBooths.find(
          (booth) => booth.booth_id === waiting.booth_id
        );
        const value = {
          ...waiting,
          booth_info: targetBooth,
        };
        return value;
      })
    )
  ),
  http.get(
    "/api/v1/waiting/my-waiting/finished",
    getDelayedResponse(dummyWaitings)
  ),
  http.get(
    "/api/v1/waiting/my-waiting/count",
    getDelayedResponse(dummyWaitings.length)
  ),
  http.get("/api/v1/waiting/:id", async ({ params }) => {
    const waitingID = Number(params.id);
    const targetWaiting = dummyWaitings.find(
      (waiting) => waiting.waiting_id === waitingID
    );

    if (!targetWaiting) return error404;
    return getDelayedResponse(targetWaiting)();
  }),
];

const error404 = new Response(
  JSON.stringify({
    status: "error",
    code: 404,
    data: null,
    message: "Booth not found",
  }),
  {
    status: 404,
    headers: { "Content-Type": "application/json" },
  }
);
