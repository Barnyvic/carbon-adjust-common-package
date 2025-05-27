export enum WalletTypes {
  CASH = 'CASH_WALLET',
  COIN = 'COIN_WALLET',
  CARBON = 'CARBON_CREDIT',
}

export enum BalanceType {
  BALANCE = 'balance',
  RESTRICTED_MONETIZED_CASH_BENEFIT_BALANCE = 'restrictedMonetizedCashBenefitBalance',
  UNRESTRICTED_MONETIZED_CASH_BENEFIT_BALANCE = 'unrestrictedMonetizedCashBenefitBalance',
  ACTUAL_BALANCE = 'actualBalance',
  ESTIMATED_BALANCE = 'estimatedBalance',
  GRANT = 'grant',
}

export enum TransactionType {
  CREDIT = 'CREDIT',
  DEBIT = 'DEBIT',
}

export enum TransactionForm {
  TRANSFER = 'TRANSFER',
  CONVERSION = 'CONVERSION',
}

export enum TransactionStatus {
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
  CANCELED = 'CANCELED',
  REFUNDED = 'REFUNDED',
  DISPUTED = 'DISPUTED',
  PROCESSING = 'PROCESSING',
  ON_HOLD = 'ON_HOLD',
}

export enum TransactionDescription {
  DEBIT_FOR_CLAIMS_APPROVAL = 'Debited for claim approval',
  DEBIT_FOR_RESTRICTED_CASH_BENEFIT = 'Debited from restricted monetized cash benefit balance',
  CREDIT_FOR_DEVICE_CREATION = 'Credited RCMBs for fixed device earning',
  CREDIT_FOR_ACTUAL_ARBITRAGE = 'Credited RCMBs for on the go device earning',
  DEBIT_COINS_FOR_CONVERSION = 'Debited coins wallet for conversion to rMCBs',
  CREDIT_RMCBS_FROM_CONVERSION = 'Credited rMCBs balance from coin conversion',
  DEBIT_FROM_SENDER_WALLET = 'Debited amount from sender wallet',
  CREDIT_TO_RECIPIENT_WALLET = 'Credited amount to recipient wallet',
  CREDIT_FOR_DEVICE_DISPATCH = 'Credited carbon for device dispatch',
  CREDIT_FOR_GRANT_APPROVAL = 'Credited for grant approval',
  DEBIT_FOR_GRANT_PAYMENT = 'Debited for grant payment',
  CREDIT_FOR_COIN_REWARD = 'Login Reward',
  CREDIT_FOR_PAYMENT_REFUND = 'Credited RCMBs for payment refund',
  DEBIT_FOR_UNRESTRICTED_CASH_BENEFIT = 'Debited from unrestricted monetized cash benefit balance',
}
