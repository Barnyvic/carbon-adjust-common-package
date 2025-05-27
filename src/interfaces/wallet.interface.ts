import mongoose, { Document } from 'mongoose';
import { IDate } from './base.interface';
import {
  TransactionType,
  WalletTypes,
  TransactionStatus,
  TransactionForm,
} from '../enums/wallet.enum';

export interface IWallet extends Document {
  readonly _id: mongoose.Types.ObjectId;
  readonly balance: number;
  walletType: WalletTypes;
  readonly user: mongoose.Types.ObjectId;
  readonly createdAt?: IDate['createdAt'];
  readonly updatedAt?: IDate['updatedAt'];
}

export interface ICarbonCreditWallet extends Document {
  readonly _id: mongoose.Types.ObjectId;
  userId: mongoose.Types.ObjectId;
  walletAddress: string;
  estimatedBalance?: number;
  walletType: WalletTypes.CARBON;
  actualBalance?: number;
  readonly createdAt?: IDate['createdAt'];
  readonly updatedAt?: IDate['updatedAt'];
}

export interface ICashWallet extends Document {
  readonly _id: mongoose.Types.ObjectId;
  userId: mongoose.Types.ObjectId;
  balance?: number;
  restrictedMonetizedCashBenefitBalance?: number;
  unrestrictedMonetizedCashBenefitBalance?: number;
  walletAddress: string;
  walletType: WalletTypes.CASH;
  grant?: number;
  readonly createdAt?: IDate['createdAt'];
  readonly updatedAt?: IDate['updatedAt'];
}

export interface ITransaction extends Document {
  carbonWalletId?: mongoose.Schema.Types.ObjectId;
  cashWalletId?: mongoose.Schema.Types.ObjectId;
  coinWalletId?: mongoose.Schema.Types.ObjectId;
  userId: mongoose.Types.ObjectId;
  receiverUserId: mongoose.Types.ObjectId;
  amount: number;
  actualAmount?: number;
  date: Date;
  walletType: WalletTypes;
  transactionType: TransactionType;
  transactionStatus: TransactionStatus;
  description: string;
  transactionForm?: TransactionForm;
}

export interface ICoinWallet extends Document {
  readonly _id: mongoose.Types.ObjectId;
  userId: mongoose.Types.ObjectId;
  walletAddress: string;
  balance?: number;
  walletType: WalletTypes.COIN;
  readonly createdAt?: IDate['createdAt'];
  readonly updatedAt?: IDate['updatedAt'];
}

export interface ICreditWalletDto {
  user: IWallet['user'];
  amount?: number;
  walletType: IWallet['walletType'];
  transactionDescription: string;
}

export interface IDebitWalletDto extends ICreditWalletDto {
  recipient: IWallet['user'];
}

export interface IGetWalletInfo {
  walletType: WalletTypes;
}

export interface IWalletInfoResponse {
  walletId?: string;
  numberOfGrants: number;
  numberOfPackages: number;
  restrictedMonetizedCashBenefitBalance: number;
  unrestrictedMonetizedCashBenefitBalance: number;
  balance: number;
  grant: number;
  name: string;
  grantUsed: number;
  walletAddress: string;
}

export interface ICoinSettings extends Document {
  readonly _id: mongoose.Types.ObjectId;
  coinConversionRate: number;
  defaultLoginCoinReward: number;
  minimumAmountOfCoin: number;
  yearlyCarbonOffset: number;
  firstPurchaseForMarketPlaceReward: number;
  readonly createdAt?: IDate['createdAt'];
  readonly updatedAt?: IDate['updatedAt'];
}

export interface ICarbonCategory extends Document {
  readonly _id: mongoose.Types.ObjectId;
  name: string;
  carbonCreditAmount: number;
  description?: string;
  isActive: boolean;
  readonly createdAt?: IDate['createdAt'];
  readonly updatedAt?: IDate['updatedAt'];
}

export interface ISelectedCarbonOffset extends Document {
  readonly _id: mongoose.Types.ObjectId;
  userId: mongoose.Types.ObjectId;
  carbonCategoryId: ICarbonCategory['_id'];
  monetizedBenefit: number;
  duration: number; // in months
  isActive: boolean;
  startDate: Date;
  endDate: Date;
  estimatedCarbonOffset: number;
  readonly createdAt?: IDate['createdAt'];
  readonly updatedAt?: IDate['updatedAt'];
}

export interface IVirtualCard extends Document {
  readonly _id: mongoose.Types.ObjectId;
  cardId: string;
  cardHolderId: string;
  cardResponseData?: string;
  userId: mongoose.Types.ObjectId;
  otp: string;
  otpSecret: string;
  otpExpiresAt: Date;
  createdAt: Date;
}

export interface IUpdateCardPersonalDetailsDto {
  firstName: string;
  lastName: string;
}

export interface IUpdateCardPinDto {
  pin: string;
}
