export enum AssetType {
  DEVICE = 'DEVICE',
  BUILDING = 'BUILDING',
}

export enum AssetApprovalStatus {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
}

export enum AssetRequestReason {
  DEVICE = 'has made a request to register device and add asset',
  BUILDING = 'has made a request to register building and add asset',
}

export enum ReceiptStatus {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
}
