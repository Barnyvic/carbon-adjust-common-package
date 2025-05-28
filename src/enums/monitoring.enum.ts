export enum MonitoringEvent {
  NEW_PAGE_VIEW = 'new-page-view',
  NEW_SUBLEVEL_EVENT = 'new-sublevel-event',
  ERROR = 'error',
  SUCCESS = 'success',
}

export enum PageName {
  DASHBOARD = 'Dashboard Page',
  PACKAGE_CATEGORY = 'Package Category Page',
  PACKAGE_DETAIL_MODAL = 'Package Detail Modal',
  ORDER_LIST = 'Order List Page',
  PACKAGE_BOOKING = 'Package Booking Page',
  USER_PROFILE = 'User Profile Page',
  HOMEOWNER_PAGE = 'Homeowner Landing Page',
}

export enum SubLevelEvent {
  LOGIN_USER_EVENT = 'Log In User',
  LOGOUT_USER_EVENT = 'Log Out User',
  ADD_TO_CART_EVENT = 'Add to Basket',
  CANCEL_ADD_TO_CART_EVENT = 'Cancel Add to Basket',
  ORDER_SUMMARY_EVENT = 'Order Summary',
  INITIALIZE_ORDER_EVENT = 'Initialize Order',
  ORDER_PAYMENT_EVENT = 'Order Payment',
  ORDER_SUCCESS_EVENT = 'Order Success',
  ORDER_FAILURE_EVENT = 'Order Failure',
  ORDER_BOOKING_EVENT = 'Order Booking',
}

export enum ServicesEvents {
  PURCHASE_STATUS_FAILED = 'purchaseStatusFailed',
  PURCHASE_STATUS_PROCESSING = 'purchaseStatusProcessing',
  PURCHASE_STATUS_COMPLETED = 'purchaseStatusCompleted',
  TRANSPORT_STATUS_FAILED = 'transportStatusFailed',
  TRANSPORT_STATUS_PROCESSING = 'transportStatusProcessing',
  TRANSPORT_STATUS_COMPLETED = 'transportStatusCompleted',
  BUILDING_STATUS_FAILED = 'buildingStatusFailed',
  BUILDING_STATUS_PROCESSING = 'buildingStatusProcessing',
  BUILDING_STATUS_COMPLETED = 'buildingStatusCompleted',
  DEVICE_STATUS_FAILED = 'deviceStatusFailed',
  DEVICE_STATUS_RECEIVED = 'deviceStatusReceived',
  DEVICE_STATUS_PROCESSING = 'deviceStatusProcessing',
  DEVICE_STATUS_COMPLETED = 'deviceStatusCompleted',
  DEVICE_STATUS_ARBITRAGE_DEVICE = 'deviceStatusArbitrageDevice',
  DEVICE_POWER_UPDATE = 'devicePowerUpdate',
  DEVICE_VOLTAGE_UPDATE = 'deviceVoltageUpdate',
  DEVICE_SWITCH_UPDATE = 'deviceSwitchUpdate',
  DEVICE_ONLINE_STATUS = 'deviceOnlineStatus',
  DEVICE_LOCATION_UPDATE = 'deviceLocationUpdate',
  DEVICE_STATUS_UPDATE = 'deviceStatusUpdate',
}
