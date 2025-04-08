import { Booth, BoothImage, Menu } from "@interfaces/booth";
import { _Booth } from "../models";
import { getResponse } from "@apis/instance";

// 부스 상세-부스 정보
type GetBoothResponse = Pick<
  _Booth,
  | "booth_id"
  | "booth_name"
  | "booth_description"
  | "booth_location"
  | "booth_notice"
  | "operating_status"
  | "booth_start_time"
  | "booth_longitude"
  | "booth_latitude"
  | "booth_menu_info"
  | "booth_image_info"
>;

type GetBoothResponseReturn = Pick<
  Booth,
  | "boothID"
  | "name"
  | "description"
  | "location"
  | "notice"
  | "operatingStatus"
  | "openTime"
  | "latitude"
  | "logitude"
  | "menus"
  | "images"
>;

const transformBoothResponse = (
  _response: GetBoothResponse
): GetBoothResponseReturn => {
  const menus: Menu[] = _response.booth_menu_info.map(
    (item): Menu => ({
      menuID: item.menu_id,
      name: item.menu_name,
      price: item.menu_price,
    })
  );
  const images: BoothImage[] = _response.booth_image_info.map(
    (item): BoothImage => ({
      imageID: item.booth_image_id,
      imageURL: item.booth_image,
    })
  );
  return {
    boothID: _response.booth_id,
    name: _response.booth_name,
    description: _response.booth_description,
    location: _response.booth_location,
    notice: _response.booth_notice,
    operatingStatus: _response.operating_status,
    openTime: _response.booth_start_time,
    latitude: _response.booth_latitude,
    logitude: _response.booth_longitude,
    menus: menus,
    images: images,
  };
};

export const getBooth = async (
  boothID: number
): Promise<GetBoothResponseReturn | null> => {
  const response = await getResponse<GetBoothResponse>(
    `/api/v1/booths/${boothID}`
  );
  if (response === null) return null;
  return transformBoothResponse(response);
};
