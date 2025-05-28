import {
  SupportedElectricitySupplier,
  SupportedGasSupplier,
} from './device.enum';

export enum PackageStatus {
  PUBLISH = 'publish',
  UNPUBLISH = 'unpublish',
}

export enum PackageType {
  SERVICE = 'Service',
  PRODUCT = 'Product',
}

export enum PackageDomain {
  GRANT_PACKAGE = 'Grant_Package',
  REGULAR_PACKAGE = 'Regular_Package',
  SUB_PACKAGE = 'Sub_Package',
  SPOT_FLEX_PACKAGE = 'Spot_Flex_Package',
}

export enum PackageCategoryStatus {
  PUBLISH = 'publish',
  UNPUBLISH = 'unpublish',
}

export enum PackageQuestionType {
  BINARY_RESPONSE_QUESTION = 'Binary Response Question',
  OPEN_ENDED_QUESTION = 'Open-Ended Question',
  SINGLE_CHOICE_QUESTION = 'Single-Choice Question',
  MULTIPLE_CHOICE_QUESTION = 'Multiple-Choice Question',
  FILE_UPLOAD_RESPONSE_QUESTION = 'File Upload Response Question',
}

export enum QuestionKey {
  BINARY = 'Binary Response Question',
  OPEN_ENDED = 'Open-Ended Question',
  SINGLE_CHOICE = 'Single-Choice Question',
  MULTIPLE_CHOICE = 'Multiple-Choice Question',
  FILE_UPLOAD = 'File Upload Response Question',
}

export enum PackageQuestionTypeDB {
  'Binary Response Question' = 'BINARY_RESPONSE_QUESTION',
  'Open-Ended Question' = 'OPEN_ENDED_QUESTION',
  'Single-Choice Question' = 'SINGLE_CHOICE_QUESTION',
  'Multiple-Choice Question' = 'MULTIPLE_CHOICE_QUESTION',
  'File Upload Response Question' = 'FILE_UPLOAD_RESPONSE_QUESTION',
}

export enum AIPackageTypes {
  TRANSITION_SCORE = 'transition-score',
  CARBONFOOT_PRINT = 'carbon-footprint',
  DECARBONIZATION = 'decarbonization',
}

export enum InventoryStatus {
  IN_STOCK = 'In-Stock',
  OUT_OF_STOCK = 'Out-of-Stock',
  RE_ORDER = 'Re-Order',
}

export enum InventoryAction {
  INCREASE = 'increase',
  DECREASE = 'decrease',
}

export enum PackageEventName {
  DISPATCH_INVENTRY_UPDATE_MAIL = 'package.inventry.update.mail',
}

export enum RampType {
  RAMP_UP = 'RAMP_UP',
  RAMP_DOWN = 'RAMP_DOWN',
  BALANCE = 'BALANCE',
}

export type EnergyProvider =
  | SupportedElectricitySupplier
  | SupportedGasSupplier;
