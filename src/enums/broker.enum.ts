export enum BrokerRequestType {
  DISPATCH_ORDER = 'order.dispatched.AI',
  OPTIMIZE_TRIP = 'trip.optimize.AI',
}

export enum OrderProcessingStatus {
  PENDING = 'PENDING',
  PROCESSING = 'PROCESSING',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
}

export enum BrokerDeviceRequestType {
  DISPATCH_DEVICE = 'device.dispatched.AI',
  OPTIMIZE_DEVICE = 'device.optimize.AI',
}

export enum DeviceProcessingStatus {
  PENDING = 'PENDING',
  PROCESSING = 'PROCESSING',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
}

export enum BrokerBuildingRequestType {
  DISPATCH_BUILDING = 'building.dispatched.AI',
}

export enum BrokerPurchaseRequestType {
  DISPATCH_PURCHASE = 'purchase.dispatched.AI',
}

export enum BrokerFlexibilityDeviceRequestType {
  DISPATCH_FLEXIBLE_DEVICE = 'flexible.device.dispatched.AI',
}

export enum BrokerDeviceScheduleRequestType {
  DISPATCH_DEVICE_SCHEDULE = 'device.schedule.dispatched.AI',
}

export enum BrokerDeviceTimerScheduleRequestType {
  DISPATCH_DEVICE_TIMER_SCHEDULE = 'device.timer.schedule.dispatched.AI',
}
