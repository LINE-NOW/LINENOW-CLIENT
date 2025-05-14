import { _BoothLocation } from "../models";
import { Booth } from "@interfaces/booth";
import { getResponse } from "@apis/instance";

interface GetBoothsLocationReturn
  extends Pick<
    Booth,
    "boothID" | "latitude" | "longitude" | "operatingStatus"
  > {}
type GetBoothsLocation = Array<_BoothLocation>;
export type BoothsLocationType = Array<GetBoothsLocationReturn>;

const transformBoothLocation = (
  _response: GetBoothsLocation
): BoothsLocationType => {
  return _response.map((item) => ({
    boothID: item.booth_id,
    latitude: item.booth_latitude,
    longitude: item.booth_longitude,
    operatingStatus: item.operating_status,
  }));
};

export const getBoothsLocation = async (): Promise<BoothsLocationType> => {
  const response = await getResponse<GetBoothsLocation>(
    `/api/v1/booths/location`
  );
  if (response === null) return [];
  return transformBoothLocation(response);
};
