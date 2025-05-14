import CheckIcon from "./assets/CheckIcon";
import ClockIcon from "./assets/ClockIcon";
import CopyIcon from "./assets/CopyIcon";
import DownIcon from "./assets/DownIcon";
import DropDownIcon from "./assets/DropDownIcon";
import EditIcon from "./assets/EditIcon";
import EyeCloseIcon from "./assets/EyeCloseIcon";
import EyeOpenIcon from "./assets/EyeOpenIcon";
import FestivalLocationIcon from "./assets/FestivalLocation";
import KakaoIcon from "./assets/KakaoIcon";
import LeftIcon from "./assets/LeftIcon";
import ListIcon from "./assets/ListIcon";
import LocationPinIcon from "./assets/LocationPinIcon";
import LogoutIcon from "./assets/LogoutIcon";
import MapIcon from "./assets/MapIcon";
import MyLocationIcon from "./assets/MyLocationIcon";
import PauseIcon from "./assets/PauseIcon";
import PhoneIcon from "./assets/PhoneIcon";
import PlayIcon from "./assets/PlayIcon";
import PowerIcon from "./assets/PowerIcon";
import RefreshIcon from "./assets/RefreshIcon";
import RightIcon from "./assets/RightIcon";
import SettingIcon from "./assets/SettingIcon";
import SortIcon from "./assets/SortIcon";
import UpIcon from "./assets/UpIcon";
import XIcon from "./assets/XIocn";

export type IconType = typeof icons;
export type IconKey = keyof IconType;

export const icons = {
  check: CheckIcon,
  down: DownIcon,
  drop_down: DropDownIcon,
  edit: EditIcon,
  eye_close: EyeCloseIcon,
  eye_open: EyeOpenIcon,
  kakao: KakaoIcon,
  left: LeftIcon,
  location_pin: LocationPinIcon,
  logout: LogoutIcon,
  pasue: PauseIcon,
  phone: PhoneIcon,

  play: PlayIcon,
  power: PowerIcon,
  refresh: RefreshIcon,
  right: RightIcon,
  setting: SettingIcon,
  sort: SortIcon,
  up: UpIcon,
  x: XIcon,
  clock: ClockIcon,
  copy: CopyIcon,
  fetival_location: FestivalLocationIcon,
  list: ListIcon,
  map: MapIcon,
  my_location: MyLocationIcon,
};

export const IconList = Object.keys(icons);
