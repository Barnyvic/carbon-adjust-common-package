export interface TuyaTokenResult {
  access_token: string;
  refresh_token: string;
  uid: string;
  expire_time: number;
}

export interface TuyaTokenRefreshParams {
  refresh_token: string;
}
