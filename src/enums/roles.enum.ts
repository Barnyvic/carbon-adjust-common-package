export enum AppRoles {
  HOME_OWNER = 'HOME_OCCUPANT',
  MERCHANT = 'MERCHANT',
  ADMIN = 'ADMIN',
  STAFF = 'STAFF',
  STAFF_ADMIN = 'STAFF_ADMIN',
  REPORT_MERCHANT = 'REPORT_MERCHANT',
  SUPER_MERCHANT = 'SUPER_MERCHANT',
  GRANT_MERCHANT = 'GRANT_MERCHANT',
  FACILITATORS = 'FACILITATORS',
  CORPORATE_USER_ADMIN = 'CORPORATE_USER_ADMIN',
  STAFF_CORPORATE = 'STAFF_CORPORATE',
  AGGREGATOR_MERCHANT = 'AGGREGATOR_MERCHANT',
}

export enum MerchantType {
  FINANCE = 'FINANCIAL_MERCHANT',
  NON_FINANCE = 'NON_FINANCIAL_MERCHANT',
}

export enum NonFinancialMerchantType {
  SE = 'SELF_EMPLOYED',
  SE_LICENSE = 'SELF_EMPLOYED_LICENSE',
  LL = 'LIMITED_LIABILITY',
  LL_LICENSE = 'LIMITED_LIABILITY_LICENSE',
}

export enum RoleAction {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  READ = 'read',
}

export enum RolePermission {
  ANY = 'any',
  OWN = 'own',
}

export enum RoleResource {
  USER = 'user',
  USERS = 'users',
  ORG = 'ORG',
  APP = 'Application',
  ADMIN = 'Admin',
  SUPER_MERCHANT = 'SUPER_MERCHANT',
  PACKAGE = 'Package',
  PACKAGE_CATEGORY = 'PackageCategory',
  SLOT = 'ScheduleSlot',
  BOOKING = 'Booking',
  ORDER_ACTIVITY = 'OrderActivity',
  PAYMENT = 'Payment',
  STAFF = 'staff',
  ASSIGNED_APP = 'AssigedApplication',
  ADVERT = 'Advert',
  DEVICE = 'Device',
  ORDER_REPORT = 'OrderReport',
  CLAIMS = 'Claims',
  TRANSPORTATION = 'Transportation',
  OPTIMIZE_TRIP = 'OptimizeTrip',
  SCHEDULE = 'Schedule',
  WALLET = 'Wallet',
  COIN_SETTINGS = 'CoinSettings',
  PURCHASE = 'Purchase',
  UNIT = 'Unit',
  SUBUNIT = 'Subunit',
  CORPORATE_STAFF = 'CorporateStaff',
  CORPORATE_ASSET = 'CorporateAsset',
  RECEIPT = 'Receipt',
  CARBON_CATEGORY = 'CarbonCategory',
  PAYMENT_REQUEST = 'PaymentRequest',
  USER_STRIPE_ACCOUNT = 'UserStripeAccount',
  NOTIFICATION = 'Notification',
}

export enum StaffAccessLevel {
  FULL = 'FULL_ACCESS',
  RESTRICTED = 'RESTRICTED_ACCESS',
}
