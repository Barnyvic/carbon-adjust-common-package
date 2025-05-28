// Request Parameters
export interface TuyaUserGetParams {
  user_id: string;
}

export interface TuyaUserRegisterParams {
  username: string;
  password: string;
  country_code: string;
}

export interface TuyaUserDeleteParams {
  user_id: string;
}

export interface TuyaUserChangePasswordParams {
  user_id: string;
  old_password: string;
  new_password: string;
}

export interface TuyaUserListParams {
  last_row_key?: string;
  page_size?: number;
}

// Response Results
export interface TuyaUserInfo {
  user_id: string;
  user_name: string;
  country_code: string;
}

export interface TuyaUserRegisterResult {
  user_id: string;
}

export interface TuyaUserListResult {
  list: TuyaUserInfo[];
  last_row_key: string;
  page_size: number;
}
