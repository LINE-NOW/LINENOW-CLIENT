import { _BoothLocation } from "../models";
import { Booth } from "@interfaces/booth";
import { getResponse } from "@apis/instance";

type GetBoothsLocation = Array<_BoothLocation>;
interface GetBoothsLocationReturn
  extends Pick<
    Booth,
    "boothID" | "latitude" | "logitude" | "operatingStatus"
    // TODO: logitude -> longitude 바꿔야 할 듯!
  > {}

const transformBoothLocation = (
  _response: GetBoothsLocation
): Array<GetBoothsLocationReturn> => {
  return _response.map((item) => ({
    boothID: item.booth_id,
    latitude: item.booth_latitude,
    logitude: item.booth_longitude,
    operatingStatus: item.operating_status,
  }));
};

export const getBoothsLocation = async (): Promise<
  Array<GetBoothsLocationReturn>
> => {
  const response = await getResponse<GetBoothsLocation>(
    `/api/v1/booths/location`
  );
  if (response === null) return [];
  return transformBoothLocation(response);
};
