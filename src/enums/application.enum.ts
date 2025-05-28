export enum OrderStatus {
  PENDING = 'pending',
  PROCESSING = 'processing',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
  DRAFT = 'draft',
}

export enum OrderActivity {
  'Schedule Call' = 'SCHEDULE_CALL',
  'Request Quote' = 'REQUEST_QUOTE',
  'Make Payment' = 'MAKE_PAYMENT',
}

export enum OrderActivityStatus {
  INITIATES = 'initiated',
  PENDING = 'pending',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
}

export enum AssignAppStatus {
  ASSIGN = 'ASSIGNED',
  UNASSIGNED = 'UNASSIGNED',
}

export enum AppEventName {
  // AI
  DISPATCH_APP = 'application.disptached.AI',
  PLACE_ORDER_HO = 'application.placeOrder.HO',
  PLACE_ORDER_MERCHANT = 'application.placeOrder.merchant',
  PAID_ORDER_HO = 'application.paidOrder.HO',
  PAID_ORDER_MERCHANT = 'application.paidOrder.MERCHANT',
  REQUEST_ORDER_QUOTE_MERCHANT = 'application.requestOrder.MERCHANT',
  PLACE_ZERO_ORDER_EMAIL_HO = 'application.placeOrder.zeroOrder.email.HO',
  PLACE_ZERO_ORDER_EMAIL_MERCHANT = 'application.placeOrder.zeroOrder.MERCHANT',
  HO_COMPLETE_ORDER_EMAIL = 'application.completeOrder.email',
  OPTIMIZED_TRIP = 'application.dispatchOrder.optimizeTrip.HOMEOWNER',
  OPTIMIZED_TRIP_RESPONSE = 'application.dispatchOrder.optimizeTrip.response',
  OPTIMIZED_TRIP_COMPLETED = 'OPTIMIZED_TRIP_COMPLETED',
  OPTIMIZED_TRIP_RECEIVED = 'OPTIMIZED_TRIP_RECEIVED',
  OPTIMIZED_TRIP_FAILED = 'OPTIMIZED_TRIP_FAILED',
  // Device
  CHECKOUT_ORDER_CART = 'CHECKOUT_ORDER_CART',
}

export enum GrantStatus {
  APPLIED = 'applied',
  PROCESSING = 'processing',
  APPROVED = 'approved',
  REJECTED = 'rejected',
  ACCEPTED = 'accepted',
  DECLINE = 'decline',
  CANCELLED = 'cancelled',
}

export enum PackageDomain {
  GRANT_PACKAGE = 'Grant_Package',
  REGULAR_PACKAGE = 'Regular_Package',
  SUB_PACKAGE = 'Sub_Package',
  SPOT_FLEX_PACKAGE = 'Spot_Flex_Package',
}

export enum SFOrderStatus {
  pending = 'pending',
  completed = 'completed',
  cancelled = 'cancelled',
  processing = 'processing',
  payout = 'payout',
  ongoing = 'ongoing',
}

export enum FlexibilityEventName {
  DISPATCH_DEVICE = 'flexibilty.dispatch',
}
