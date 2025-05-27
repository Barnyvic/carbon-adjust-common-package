import mongoose, { Document } from 'mongoose';
import { IDate } from './base.interface';
import {
  DeviceStatus,
  SupportedGasSupplier,
  DeviceDispatchStatus,
  DispatchNotificationStatus,
  DispatchType,
  ScheduleType,
} from '../enums';

export interface IDevicePowerReading extends Document {
  deviceId: string;
  tuyaDeviceId: string;
  timestamp: Date;
  powerRating: number;
  voltageLevel: number;
  isDeviceOn: boolean;
  rawReading: Record<string, any>;
  createdAt?: IDate['createdAt'];
  readonly updatedAt?: IDate['updatedAt'];
}

export interface IDevicePowerReadingDto {
  deviceId: string;
  tuyaDeviceId: string;
  timestamp: Date;
}

export interface IDevice extends Document {
  _id?: mongoose.Schema.Types.ObjectId;
  status: DeviceStatus;
  file?: string;
  readonly name: string;
  readonly type: string;
  readonly serialNos: string;
  readonly energySource?: string;
  readonly energyProvider?: string;
  readonly powerRating?: number;
  readonly voltageLevel?: number;
  fixedCarbonOffsetProgress?: number;
  currentDispatchTime?: Date | null;
  currentDispatchStatus?: DeviceDispatchStatus | null;
  currentDispatchWindow?: number | null;
  readonly gasProvider?: SupportedGasSupplier;
  creator: mongoose.Schema.Types.ObjectId;
  tuyaDeviceId?: string;
  tuyaDevicePID?: string;
  category?: string;
  createdAt?: IDate['createdAt'];
  readonly updatedAt?: IDate['updatedAt'];
  imageIconUrl?: string;
  deviceName?: string;
  longitude?: number;
  latitude?: number;
  isSpotFlexEligible?: (pkg: any) => Promise<boolean>;
}

export interface IAddDeviceDto {
  name: IDevice['name'];
  type: IDevice['type'];
  serialNos: IDevice['serialNos'];
  gasProvider: IDevice['gasProvider'];
  category?: IDevice['category'];
  tuyaDeviceId?: IDevice['tuyaDeviceId'];
  tuyaDevicePID?: IDevice['tuyaDevicePID'];
  imageIconUrl?: IDevice['imageIconUrl'];
  deviceName?: IDevice['deviceName'];
  longitude?: IDevice['longitude'];
  latitude?: IDevice['latitude'];
}

export interface IDispatchDeviceDto {
  deviceId: IDevice['_id'];
}

export interface IDispatchNotificationTimes {
  _id?: mongoose.Schema.Types.ObjectId;
  scheduleTime: Date;
  status: DispatchNotificationStatus;
}

export interface IDispatchDevice extends Document {
  _id?: mongoose.Schema.Types.ObjectId;
  status: DeviceDispatchStatus;
  device: IDevice['_id'];
  taskId?: string;
  dispatchTime?: Date;
  bestDispatchStartTime?: Date;
  isDeleted?: boolean;
  readonly wpInHours: string;
  readonly wpInHoursTimestamp: Date;
  readonly dispatchWindowInHours: number;
  readonly dispatchStartTime: string;
  readonly timeZone: string;
  notificationTimes?: IDispatchNotificationTimes[];
  readonly createdAt?: IDate['createdAt'];
  readonly updatedAt?: IDate['updatedAt'];
  creator: mongoose.Schema.Types.ObjectId;
  dispatchTimeline: {
    status: DeviceDispatchStatus;
    timestamp?: IDate['createdAt'];
  }[];
  estimatedCC: number;
  actualCC: number;
  isAutomated: boolean;
  dispatchType: DispatchType;
  packageId?: mongoose.Schema.Types.ObjectId;
  isflexible?: boolean;
  tuyaOnScheduleId?: string;
  tuyaOffScheduleId?: string;
}

export interface IDispatchDeviceDto {
  // In "HH:mm" format (e.g., "02:00")
  startTime: IDispatchDevice['dispatchStartTime'];
  // In hours (e.g., 4)
  dispatchWindow: IDispatchDevice['dispatchWindowInHours'];
  // In "HH:mm" format (e.g., "3:45")
  workingPeriod: IDispatchDevice['wpInHours'];
  deviceId: IDispatchDevice['device'];
  timeZone: IDispatchDevice['timeZone'];
  isAutomated: IDispatchDevice['isAutomated'];
}

export interface IDispatchDeviceEvent {
  device: IDevice;
  dispatchDevice: IDispatchDevice;
}

export interface IDeviceScheduleEvent {
  device: IDevice;
  schedule: IDeviceSchedule;
}

export interface IDeviceTimerScheduleEvent {
  device: IDevice;
  timeSchedule: ITimeDeviceSchedule;
}

export interface IEmailQueueDispatchJob {
  to: string;
  name: string;
  dispatchId: IDispatchDevice['_id'];
  notifyTimeId: mongoose.Schema.Types.ObjectId;
  dispatchTime: Date;
  isActiveDispatchTime: boolean;
  success?: boolean;
}

export interface IAiServiceSuccessLoginResponse {
  access_token: string;
  refresh_token: string;
}

export interface IAiServicePowerLimit {
  from_time: string;
  to_time: string;
  consumption_limit: number;
}

export interface IAiServiceGraphData {
  from_date: string;
  to_date: string;
  emissions: number;
  total_power: number;
  no_devices: number;
  power_limit: number;
}

export interface IChart {
  powerLimit: IAiServicePowerLimit[];
  chartData: IAiServiceGraphData[];
}

export interface IDispatchBuilidingEvent {
  building: any; // IBuilding type needs to be imported
  dispatchBuilding: any; // IDispatchBuilding type needs to be imported
  energyBills: string[];
  devices: mongoose.Schema.Types.ObjectId[];
}

export interface TuyaDeviceStatus {
  code: string;
  value: boolean | number | string;
}

export interface ITuyaDevice extends Document {
  _id?: mongoose.Schema.Types.ObjectId;
  active_time: number;
  create_time: number;
  id: string;
  ip: string;
  lat: string;
  lon: string;
  name: string;
  online: boolean;
  product_name: string;
  status: TuyaDeviceStatus[];
  time_zone: string;
  uid: string;
  update_time: number;
  isDeviceDisabled?: boolean;
  readonly createdAt?: IDate['createdAt'];
  readonly updatedAt?: IDate['updatedAt'];
}

export interface IDeviceSchedule extends Document {
  _id?: mongoose.Schema.Types.ObjectId;
  deviceId: mongoose.Schema.Types.ObjectId;
  scheduleType: ScheduleType;
  tuyaDeviceId: string;
  startDate: Date;
  endDate: Date;
  startTime: string;
  workingPeriod: string;
  status: boolean;
  tuyaTimerId?: string;
  createdBy?: mongoose.Schema.Types.ObjectId;
  createdAt?: IDate['createdAt'];
  updatedAt?: IDate['updatedAt'];
  timeZone: string;
  tuyaOnScheduleId?: string;
  tuyaOffScheduleId?: string;
  scheduleDays?: number[];
  energyUsed?: number;
  isCompleted?: boolean;
  emission?: number;
}

export interface IDeviceScheduleDto {
  deviceId: IDeviceSchedule['deviceId'];
  scheduleType: IDeviceSchedule['scheduleType'];
  startDate: IDeviceSchedule['startDate'];
  endDate: IDeviceSchedule['endDate'];
  startTime: IDeviceSchedule['startTime'];
  workingPeriod: IDeviceSchedule['workingPeriod'];
  status?: IDeviceSchedule['status'];
  timeZone: IDeviceSchedule['timeZone'];
  scheduleDays?: IDeviceSchedule['scheduleDays'];
  energyUsed?: number;
}

export interface ITimeDeviceSchedule extends Document {
  _id?: mongoose.Schema.Types.ObjectId;
  deviceId: mongoose.Schema.Types.ObjectId;
  tuyaDeviceId: string;
  scheduleDate: Date;
  startTime: string;
  duration: string;
  status: boolean;
  isCompleted?: boolean;
  createdBy?: mongoose.Schema.Types.ObjectId;
  createdAt?: IDate['createdAt'];
  updatedAt?: IDate['updatedAt'];
  timeZone: string;
  energyUsed?: number;
  name?: string;
  tuyaOnScheduleId?: string;
  tuyaOffScheduleId?: string;
  emission?: number;
}

export interface ITimeDeviceScheduleDto {
  deviceId: ITimeDeviceSchedule['deviceId'];
  scheduleDate?: ITimeDeviceSchedule['scheduleDate'];
  startTime: ITimeDeviceSchedule['startTime'];
  duration: ITimeDeviceSchedule['duration'];
  status?: ITimeDeviceSchedule['status'];
  timeZone: ITimeDeviceSchedule['timeZone'];
  energyUsed?: number;
}
