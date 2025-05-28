import { TuyaApiResponse } from './tuya-response.interface';

export interface DeviceCommand {
  code: string;
  value: boolean | number | string | Record<string, any>;
}

export interface DeviceCommandsRequest {
  commands: DeviceCommand[];
}

export interface DeviceCommandsResponse {
  success: boolean;
  t: number;
  result: true;
}

export interface DeviceFunction {
  name?: string;
  desc?: string;
  code: string;
  type: 'Boolean' | 'Integer' | 'Enum' | 'Json' | string;
  values: string;
}

export interface CategoryFunctionsResult {
  category: string;
  functions: DeviceFunction[];
}

export interface CategoryFunctionsResponse {
  success: boolean;
  t: number;
  result: CategoryFunctionsResult;
}

export interface DeviceFunctionsResult {
  category: string;
  functions: DeviceFunction[];
}

export interface DeviceFunctionsResponse {
  success: boolean;
  t: number;
  result: DeviceFunctionsResult;
}

export interface DevicesCategoryFunctions {
  category: string;
  devices: string[];
  functions: DeviceFunction[];
}

export interface DevicesInstructionSetResult {
  result: DevicesCategoryFunctions[];
  success: boolean;
  t: number;
}

export interface DeviceSpecificationsResult {
  category: string;
  functions: DeviceFunction[];
  status: DeviceFunction[];
}

export interface DeviceSpecificationsResponse {
  success: boolean;
  t: number;
  result: DeviceSpecificationsResult;
}

export interface DeviceListParams {
  page_no?: number;
  page_size?: number;
  schema?: string;
}

export interface DeviceListResult {
  total: number;
  devices: Array<{
    id: string;
    [key: string]: any;
  }>;
}

export interface DeviceLocationParams {
  device_ids: string;
}

export interface DeviceLocationResult {
  [key: string]: any;
}

export interface DeviceControlParams {
  device_id: string;
  commands: Array<{
    code: string;
    value: any;
  }>;
}

export interface DeviceScheduleParams {
  device_id: string;
  timer_id?: string;
  [key: string]: any;
}

export interface DeviceStatusResult {
  [key: string]: any;
}

export interface DeviceRegistrationTokenParam {
  pairing_type: 'ble' | 'ap' | 'ez';
  uid: string;
  time_zone_id: string;
  asset_id: string;
  extension?: {
    uuid: string;
  };
}

export interface DeviceRegistrationTokenResult {
  expire_time: number;
  region: 'AY' | 'EU' | 'US';
  token: string;
  secret: string;
  extension: {
    encrypt_key: string;
    random: string;
  };
}

export interface DeviceRegistrationUseTokenParam {
  token: string;
}

export interface DeviceRegistrationUseTokenResult {
  success_devices: {
    device_id: string;
    product_id: string;
    name: string;
    category: string;
  }[];
  error_devices: {
    device_id: string;
    code: string;
    msg: string;
    name: string;
  }[];
}

export interface DeviceRegistrationDiscoverParam {
  device_id: string;
  duration: number;
}

export interface DeviceRegistrationStopDiscoverParam {
  device_id: string;
}

export interface DeviceRegistrationSubDeviceParam {
  device_id: string;
  discovery_time: number;
}

export interface DeviceRegistrationSubDeviceResult {
  id: string;
  name: string;
  asset_id: string;
  active_time: number;
  update_time: number;
  category: string;
  product_id: string;
  online: boolean;
}

export interface DeviceScheduleResult {
  timer_id: string;
}

export interface DeviceScheduleListItem {
  date: string;
  functions: Array<{
    code: string;
    value: any;
  }>;
  loops: string;
  alias_name: string;
  timer_id: string;
  timezone_id: string;
  time: string;
}

export interface DeleteScheduleResult {
  tid: string;
  result: boolean;
  t: number;
  success: boolean;
}

export type DeviceScheduleResponse = TuyaApiResponse<DeviceScheduleResult>;
export type DeviceScheduleListResponse = TuyaApiResponse<
  DeviceScheduleListItem[]
>;
export type DeleteScheduleResponse = TuyaApiResponse<DeleteScheduleResult>;

export interface DeviceServiceListResult {
  total: number;
  has_more: boolean;
  devices: {
    id: string;
    uid: string;
    local_key: string;
    category: string;
    product_id: string;
    sub: boolean;
    uuid: string;
    asset_id: string;
    online: boolean;
    name: string;
    ip: string;
    time_zone: string;
    create_time: number;
    update_time: number;
    active_time: number;
  }[];
}

export interface DeviceServiceListParam {
  device_ids?: string[];
}

export interface DeviceServiceDetailParam {
  device_id: string;
}

export interface DeviceServiceDetailResult {
  id: string;
  name: string;
  uid: string;
  local_key: string;
  category: string;
  product_id: string;
  product_name: string;
  sub: boolean;
  uuid: string;
  asset_id: string;
  online: boolean;
  active_time: number;
  icon: string;
  ip: string;
}

export interface DeviceServiceResetParam {
  device_id: string;
}

export interface DeviceServiceDeleteParam {
  device_id: string;
}

export interface DeviceServiceDeleteBatchParam {
  device_ids: string[];
}

export interface DeviceServiceSubDeviceParam {
  device_id: string;
}

export interface DeviceServiceSubDeviceResult {
  id: string;
  name: string;
  online: boolean;
  asset_id: string;
  category: string;
  produce_id: string;
  active_time: number;
  update_time: number;
}

export interface DeviceServiceChangeNameParam {
  device_id: string;
  name: string;
}

export interface DeviceServiceFreezeStateParam {
  device_id: string;
}

export interface DeviceServiceFreezeStateResult {
  state: 0 | 1;
}

export interface DeviceServiceChangeFreezeStateParam {
  device_id: string;
  state: 0 | 1;
}

export interface DeviceServiceAssetDevicesParam {
  asset_id: string;
}

export interface DeviceServiceAssetDevicesResult {
  id: string;
}

export interface DeviceStatusValue {
  code: string;
  value: boolean | number | string | Record<string, any>;
}

export interface DeviceStatusResult {
  success: boolean;
  t: number;
  result: DeviceStatusValue[];
}

export interface DeviceStatusResponse {
  success: boolean;
  t: number;
  result: DeviceStatusValue[];
}
