export enum BrokerRequestType {
  DISPATCH_ORDER = 'dispatchOrder',
  RECEIVED_ORDER = 'receivedOrder',
  COMPLETED_ORDER = 'completedOrder',
  FAILED_ORDER = 'failedOrder',
  DISPATCH_OPTIMIZED_TRIP = 'dispatchOptimizedTrip',
  RECEIVED_OPTIMIZED_TRIP = 'receivedOptimizedTrip',
  COMPLETED_OPTIMIZED_TRIP = 'completedOptimizedTrip',
  FAILED_OPTIMIZED_TRIP = 'failedOptimizedTrip',
}

export enum BrokerDeviceRequestType {
  DISPATCH_DEVICE = 'dispatchDevice',
  RECEIVED_DEVICE = 'receivedDevice',
  COMPLETED_DEVICE = 'completedDevice',
  FAILED_DEVICE = 'failedDevice',
  ARBITRAGE_DEVICE = 'arbitrageDevice',
}

export enum BrokerDeviceScheduleRequestType {
  DISPATCH_SCHEDULE_DEVICE = 'dispatchDeviceSchedule',
  RECEIVED_SCHEDULE_DEVICE = 'receivedDeviceSchedule',
  COMPLETED_SCHEDULE_DEVICE = 'completedDeviceSchedule',
  FAILED_SCHEDULE_DEVICE = 'failedDeviceSchedule',
}

export enum BrokerDeviceTimerScheduleRequestType {
  DISPATCH_TIMED_SCHEDULE_DEVICE = 'dispatchTimedDevice',
  RECEIVED_TIMED_SCHEDULE_DEVICE = 'receivedTimedDevice',
  COMPLETED_TIMED_SCHEDULE_DEVICE = 'completedTimedDevice',
  FAILED_TIMED_SCHEDULE_DEVICE = 'failedTimedDevice',
}

export enum DeviceProcessingStatus {
  STARTED = 'STARTED',
  SUCCESS = 'SUCCESS',
  FAILURE = 'FAILURE',
  DISPATCH = 'DISPATCH',
}

export enum OrderProcessingStatus {
  STARTED = 'STARTED',
  SUCCESS = 'SUCCESS',
  FAILURE = 'FAILURE',
  DISPATCH = 'DISPATCH',
}

export enum BrokerEvent {
  DISPATCH_ORDER_NOTIFICATION = 'order.dispatchOrderNotification',
}

// requestType:​
// ​1. dispatch
// ​2.  received
// ​3. completed
// ​4. failed
export enum BuildingDispatchStatus {
  STARTED = 'STARTED',
  SUCCESS = 'SUCCESS',
  FAILURE = 'FAILURE',
}

export enum BrokerBuildingRequestType {
  DISPATCH_BUILDING = 'dispatchBuilding',
  RECEIVED_BUILDING = 'receivedBuilding',
  COMPLETED_BUILDING = 'completedBuilding',
  FAILED_BUILDING = 'failedBuilding',
}

export enum PurchaseDispatchStatus {
  STARTED = 'STARTED',
  SUCCESS = 'SUCCESS',
  FAILURE = 'FAILURE',
}

export enum BrokerPurchaseRequestType {
  DISPATCH_PURCHASE = 'dispatchPurchase',
  RECEIVED_PURCHASE = 'receivedPurchase',
  COMPLETED_PURCHASE = 'completedPurchase',
  FAILED_PURCHASE = 'failedPurchase',
}

export enum BrokerFlexibilityDeviceRequestType {
  DISPATCH_FLEXIBLE_DEVICE = 'dispatchFlexibleDevice',
  RECEIVED_FLEXIBLE_DEVICE = 'receivedFlexibleDevice',
  COMPLETED_FLEXIBLE_DEVICE = 'completedFlexibleDevice',
  FAILED_FLEXIBLE_DEVICE = 'failedFlexibleDevice',
}
