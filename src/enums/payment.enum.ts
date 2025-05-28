export enum PaymentMethod {
  LINK = 'link',
  CARD = 'card',
  KLARNA = 'klarna',
  WALLET = 'Wallet',
  COMBINATION = 'Combination',
  NONE = 'none',
}

export enum PaymentStatus {
  UNPAID = 'UNPAID',
  INITATED = 'INITATED',
  PENDING = 'PENDING',
  SUCCESS = 'SUCCESS',
  FAILED = 'FAILED',
  REFUNDED = 'Refunded',
}

export enum PaymentRequestStatus {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
  PAID = 'PAID',
}

export enum PaymentEventName {
  PROCESS_VIRTUAL_CARD_TRANSACTION = 'PROCESS_VIRTUAL_CARD_TRANSACTION',
}
