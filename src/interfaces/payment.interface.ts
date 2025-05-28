import mongoose, { Document } from 'mongoose';
import { PaymentMethod, PaymentStatus } from '../enums/payment.enum';
import { IDate } from './base.interface';
import { IUser } from './user.interface';
import { PaymentRequestStatus } from '../enums/payment.enum';
import { TransactionStatus } from 'src/enums';
import { IApplication } from './application.interface';

export interface IPaymentBreakdown {
  subtotal: number;
  discount: number;
  shippingFee: number;
  vat: number;
  transactionCost: number;
  total: number;
}

export interface IPayment extends Document {
  readonly _id?: mongoose.Schema.Types.ObjectId;
  readonly transactionId: string;
  readonly orderId: mongoose.Types.ObjectId;
  readonly createdAt?: IDate['createdAt'];
  readonly updatedAt?: IDate['updatedAt'];
  status: PaymentStatus;
  readonly amount: number;
  readonly amountRecieved?: number;
  readonly amountDebitedFromRestrictedWallet?: number;
  readonly amountDebitedFromUnrestrictedWallet?: number;
  readonly paymentCreatedAt?: number;
  readonly userId?: IUser['_id'];
  readonly currency: string;
  readonly paymentMethodTypes: Array<string>;
  breakdown?: IPaymentBreakdown;
}

export interface IPaymentIntentDto {
  orderId: string;
  paymentMethod?: PaymentMethod;
  orders?: string[];
}

export interface IPaymentOrderEvent {
  app: IApplication;
  forMerchant?: boolean;
}

export interface ICheckoutOrderCart {
  userId: string;
  orderIds: IApplication['_id'][];
}

export type EuropeanCountry =
  | 'FR'
  | 'DE'
  | 'ES'
  | 'IT'
  | 'PT'
  | 'IE'
  | 'NL'
  | 'BE'
  | 'LU'
  | 'AT'
  | 'FI'
  | 'SK'
  | 'SI'
  | 'GR'
  | 'EE'
  | 'LV'
  | 'LT'
  | 'MT'
  | 'CY'
  | 'EUROPE';

export type SupportedCountry = 'US' | 'GB' | EuropeanCountry;

export interface IUserStripeAccount extends Document {
  readonly userId?: IUser['_id'];
  stripeAccountId: string;
  country: SupportedCountry;
  accountNumber?: string;
  sortCode?: string;
  routingNumber?: string;
  accountHolderName?: string;
  isVerified: boolean;
  readonly createdAt?: IDate['createdAt'];
  readonly updatedAt?: IDate['updatedAt'];
}

export interface IAddBankAccountDto {
  country: 'US' | 'GB' | 'EUROPE' | string;
  accountNumber: string;
  accountHolderName: string;
  sortCode?: string;
  routingNumber?: string;
}

export interface IPaymentRequest extends Document {
  merchantId: IUser['_id'];
  amount: number;
  status: PaymentRequestStatus;
  note?: string;
  adminNote?: string;
  stripeTransferId?: string;
  paidAt?: Date;
}

export interface ICreatePaymentRequestDto {
  amount: number;
  note?: string;
}

export interface IProcessPaymentRequestDto {
  paymentRequestId: string;
  approve: boolean;
  adminNote?: string;
}

export interface IProcessVirtualCardTransactionDto {
  amount: number;
  cardId: string;
  transactionStatus: TransactionStatus;
}
