import { getResponse } from "@apis/instance";
import { BoothRestartStatus } from "./_interfaces";

export const getBoothRestartStatus = async () => {
  try {
    const response = await getResponse<BoothRestartStatus>(
      "/api/v1/manager/booth/is-restart"
    );

    return response;
  } catch (error) {
    return null;
  }
};
