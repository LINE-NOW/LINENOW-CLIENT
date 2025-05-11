import { _BoothLocation } from "../models";
import { Booth } from "@interfaces/booth";
import { getResponse } from "@apis/instance";

type GetBoothsLocation = Array<_BoothLocation>;
interface GetBoothsLocationReturn
  extends Pick<
    Booth,
    "boothID" | "latitude" | "longitude" | "operatingStatus"
  > {}

const transformBoothLocation = (
  _response: GetBoothsLocation
): Array<GetBoothsLocationReturn> => {
  return _response.map((item) => ({
    boothID: item.booth_id,
    latitude: item.booth_latitude,
    longitude: item.booth_longitude,
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
