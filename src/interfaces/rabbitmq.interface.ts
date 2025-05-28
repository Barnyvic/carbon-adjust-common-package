import { IApplication } from './application.interface';
import {
  BrokerRequestType,
  OrderProcessingStatus,
  BrokerDeviceRequestType,
  DeviceProcessingStatus,
  BrokerBuildingRequestType,
  BrokerPurchaseRequestType,
  BrokerFlexibilityDeviceRequestType,
  BrokerDeviceScheduleRequestType,
  BrokerDeviceTimerScheduleRequestType,
} from '../enums/broker.enum';
import { IPackage } from './package.interface';
import {
  ITransportDetails,
  IOptimizeTripQueueResponse,
} from './transport.interface';
import { BuildingType, EnergySource } from '../enums/building.enum';
import { IBuildingAIResponseData } from './building.interface';
import { IPurchaseAIResponseData } from './purchase.interface';
import { RampType } from '../enums/package.enum';
import { IDevice, IDispatchDevice } from './devices.interface';

export interface IDispatchOrder {
  orderId: string;
  packageName: string;
  file: string;
  choice?: string;
  arbitrage?: string;
  device?: string;
}

export interface IBrokerDispatchDevice {
  device_id: IDevice['_id'];
  power_consumption: IDevice['powerRating'];
  duration: number;
  window_start: string;
  window: IDispatchDevice['dispatchWindowInHours'];
  time_zone: IDispatchDevice['timeZone'];
}

export interface IBrokerDeviceSchedule {
  device_id: IDevice['_id'];
  duration: number;
  window_start: string;
}

export interface IBrokerTimeDeviceSchedule {
  device_id: IDevice['_id'];
  duration: number;
  window_start: string;
}

export interface IPublisherData {
  requestType: BrokerRequestType;
  data: IDispatchOrder;
}

export interface IDevicePublishedData {
  requestType: BrokerDeviceRequestType;
  data: IBrokerDispatchDevice;
}

export interface IDeviceSchedulePublishedData {
  requestType: BrokerDeviceScheduleRequestType;
  data: IBrokerDeviceSchedule;
}

export interface IDeviceTimerSchedulePublishedData {
  requestType: BrokerDeviceTimerScheduleRequestType;
  data: IBrokerTimeDeviceSchedule;
}

export interface IDeviceTimerScheduleResponseAck {
  deviceId: string;
  taskId: string;
  status: DeviceProcessingStatus;
  response?: {
    forecast_emission?: number;
  };
}

export interface IDeviceTimerScheduleResponse {
  requestType: BrokerDeviceTimerScheduleRequestType;
  data: IDeviceTimerScheduleResponseAck;
}

export interface IDeviceScheduleResponseAck {
  deviceId: string;
  taskId: string;
  status: DeviceProcessingStatus;
  response?: {
    forecast_emission?: number;
  };
}

export interface IDeviceScheduleResponse {
  requestType: BrokerDeviceScheduleRequestType;
  data: IDeviceScheduleResponseAck;
}

export interface IConsumerOrderResponseAck {
  orderId?: string;
  taskId: string;
  status: OrderProcessingStatus;
  response?: string;
}

export interface IConsumerResponse {
  requestType: BrokerRequestType;
  data: IConsumerOrderResponseAck;
}

export interface IDeviceConsumerOrderResponseAck {
  deviceId?: string;
  taskId: string;
  status: DeviceProcessingStatus;
  response?: {
    message: string;
    start_time?: string;
    actual_arbitrage: number;
    forecast_arbitrage?: number;
  };
}

export interface IDeviceConsumerResponse {
  requestType: BrokerDeviceRequestType;
  data: IDeviceConsumerOrderResponseAck;
}

export interface IDispatchAIOrderPayload {
  order: IApplication;
  pkg: IPackage;
}

export interface IOptimizeTripPublishedData {
  requestType: BrokerRequestType;
  data: ITransportDetails;
}

export interface IOptimizedTripResponseAck {
  orderId: string;
  optimizedTripId: string;
  taskId: string;
  status: DeviceProcessingStatus;
  response?: IOptimizeTripQueueResponse;
}

export interface IOptimizeTripResponse {
  requestType: BrokerDeviceRequestType;
  data: IOptimizedTripResponseAck;
}

export interface IBuildingPublishData {
  requestType: BrokerBuildingRequestType;
  data: {
    orderId: string;
    packageName: string;
    energy_bills: string[];
    building_id: string | null;
    devices: string[];
    house_type: BuildingType;
    occupants: number;
    energy_source: EnergySource;
  };
}

export interface IBuildingConsumeResponse {
  requestType: BrokerBuildingRequestType;
  data: {
    orderId?: string;
    taskId: string;
    status: DeviceProcessingStatus;
    response?: IBuildingAIResponseData;
  };
}

export interface IPurchasePublishData {
  requestType: BrokerPurchaseRequestType;
  data: {
    orderId: string;
    packageName: string;
    bill_urls: string[];
    user_id: string;
  };
}

export interface IPurchaseConsumeResponse {
  requestType: BrokerPurchaseRequestType;
  data: {
    orderId?: string;
    taskId: string;
    status: DeviceProcessingStatus;
    response?: IPurchaseAIResponseData;
  };
}

export interface Device {
  device_id: string;
  start_date: Date;
  end_date: Date;
  power_consumption: number;
  time_zone: string;
}

export interface IFlexibleDevicePublishData {
  requestType: BrokerFlexibilityDeviceRequestType;
  data: {
    devices: Device[];
    operation: RampType;
  };
}

export interface IFlexibleDeviceConsumeResponse {
  requestType: BrokerFlexibilityDeviceRequestType;
  data: {
    taskId: string;
    status: DeviceProcessingStatus;
    response?: Device[];
  };
}

export interface IFlexibleDeviceConsumerResponseAck {
  devices?: string[];
  taskId: string;
  status: DeviceProcessingStatus;
  response?: {
    device_id: string;
    operation_type: RampType;
    is_successful: boolean;
  }[];
}
