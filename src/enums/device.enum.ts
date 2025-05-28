export enum DeviceType {
  WEB = 'web',
  MOBILE = 'mobile',
}

export enum DeviceStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  PENDING = 'pending',
  DELETED = 'deleted',
}

export enum DeviceDispatchStatus {
  PENDING = 'pending',
  SCHEDULED = 'scheduled',
  DISPATCHED = 'dispatched',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
  FAILED = 'failed',
}

export enum DispatchNotificationStatus {
  PENDING = 'pending',
  SENT = 'sent',
  FAILED = 'failed',
}

export enum DispatchType {
  MANUAL = 'manual',
  AUTOMATED = 'automated',
}

export enum ScheduleType {
  DAILY = 'daily',
  WEEKLY = 'weekly',
  MONTHLY = 'monthly',
  ONCE = 'once',
}

export enum SupportedGasSupplier {
  NONE = 'none',
  BRITISH_GAS = 'british_gas',
  EDF = 'edf',
  EON = 'eon',
  NPOWER = 'npower',
  SCOTTISH_POWER = 'scottish_power',
  SSE = 'sse',
  OTHER = 'other',
}

export enum SupportedElectricitySupplier {
  BRISTISH_GAS = 'British Gas (Centrica)',
  EDF_ENERGY = 'EDF Energy',
  EON_UK = 'E.ON UK',
  NPOWER = 'npower (Innogy)',
  SCOTTISH_POWER = 'ScottishPower (Iberdrola)',
  SSE = 'SSE (SSE plc)',
  BULB_ENERGY = 'Bulb Energy',
  COOP_ENERGY = 'Co-op Energy',
  ECOTRICITY = 'Ecotricity',
  FIRST_UTILITY = 'First Utility (Shell Energy)',
  GOOD_ENERGY = 'Good Energy',
  GREEN_STAR_ENERGY = 'Green Star Energy',
  OCTOPUS_ENERGY = 'Octopus Energy',
  OVO_ENERGY = 'Ovo Energy',
  UTILITA_ENERGY = 'Utilita Energy',
}
