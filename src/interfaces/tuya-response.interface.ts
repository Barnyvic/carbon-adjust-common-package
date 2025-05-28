export interface TuyaApiResponse<T> {
  success: boolean;
  t: number;
  result: T;
}
