import { BoothStatus, WaitingStatus } from "@linenow-types/status";

export interface _User {
  user_id: number;
  user_phone: string;
  user_password: string;
  user_name: string;
  no_show_num: number;
}

export interface _Waiting {
  waiting_id: number;
  user_id: number;
  booth_id: number;
  person_num: number;

  waiting_status: WaitingStatus;
  total_waiting_teams: number;
  waiting_teams_ahead: number;

  waiting_num: number;
  created_at: string;
  confirmed_at: string;
  canceled_at: string;
  arrival_at: string;
}

export interface _Booth {
  booth_id: number;
  booth_name: string;
  thumbnail: string;
  booth_description: string;
  booth_start_time: string;
  booth_end_time: string;
  booth_notice: string;
  booth_location: string;
  booth_latitude: string;
  booth_longitude: string;
  operating_status: BoothStatus;
  menu_info: _Menu[];
  booth_image_info: _Image[];
}

export interface _Menu {
  menu_id: number;
  menu_name: string;
  menu_price: number;
}

export interface _Image {
  booth_image_id: number;
  booth_image: string;
}

export interface _BoothLocation {
  booth_id: number;
  booth_latitude: string;
  booth_longitude: string;
  operating_status: BoothStatus;
}
