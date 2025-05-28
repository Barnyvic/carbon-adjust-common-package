import mongoose, { Document, Types } from 'mongoose';
import { IDate, IUserAddress } from './base.interface';
import { AppRoles } from '../enums/roles.enum';
import { IUser } from './user.interface';
import { PaymentStatus } from '../enums/payment.enum';
import {
  OrderStatus,
  GrantStatus,
  PackageDomain,
  OrderActivity,
  OrderActivityStatus,
  AssignAppStatus,
  SFOrderStatus,
} from 'src/enums/application.enum';
import { IDevice } from './devices.interface';
import { PackageQuestionType, RampType } from 'src/enums/package.enum';
import { IPackage } from './package.interface';
import { OrderProcessingStatus } from 'src/enums/rabbitmq.enum';

export interface IApplication extends Document {
  readonly package: mongoose.Schema.Types.ObjectId;
  status: OrderStatus;
  readonly customerAddress: IUserAddress;
  readonly customerEmail: string;
  readonly customerPhone: string;
  paymentStatus: PaymentStatus;
  readonly customer: mongoose.Schema.Types.ObjectId;
  merchant: mongoose.Schema.Types.ObjectId;
  readonly price: number;
  readonly quantity?: number;
  readonly createdAt?: IDate['createdAt'];
  readonly updatedAt?: IDate['updatedAt'];
  responses?: ICustomerOrderResponse[];
  orderActivities?: IOrderActivity[];
  readonly isAssigned?: boolean;
  aiOrderResponse?: string;
  merchantReport?: string;
  adminReport?: string;
  orderReportStatus?: {
    initiator: IUser['_id'];
    role: AppRoles;
    timestamp?: Date;
  }[];
  grantStatus: GrantStatus;
  domain?: PackageDomain;
  grantContract?: string;
  approvedGrant?: number;
  amountSpent?: number;
  readonly reasonforApplying?: string;
  readonly hasDownloadedableFile?: boolean;
  color?: string;
  readonly transactionId?: mongoose.Schema.Types.ObjectId;
  couponCodes?: string[];
  grossPrice?: number;
  couponDiscount?: number;
  isMonetized?: boolean;
  carbonCategoryId?: string;
  numberOfDevices?: number;
  requestAmount?: number;
}

export interface ICustomerOrderResponse {
  readonly question: string;
  response: string;
}

export interface IOrderActivity {
  _id?: mongoose.Schema.Types.ObjectId;
  initiator: mongoose.Schema.Types.ObjectId;
  initiatorRole: AppRoles;
  activity: OrderActivity;
  status: OrderActivityStatus;
  initatedAt: Date;
  responder: mongoose.Schema.Types.ObjectId;
  respondedAt?: Date;
  response?: string;
  responderRole: AppRoles;
}

export interface ICreateApplicationDto {
  package: IApplication['package'];
  customerAddress: IApplication['customerAddress'];
  quantity?: IApplication['quantity'];
  price: IApplication['price'];
  customerEmail: IApplication['customerEmail'];
  customerPhone: IApplication['customerPhone'];
  responses: IApplication['responses'];
  reasonForApplying?: IApplication['reasonforApplying'];
  proceed?: 'CART' | 'PAYMENT';
  color?: string;
}

export interface IFetchOrderBooking {
  dt: string;
}

export interface ICustomerPlaceOrderResponse {
  readonly question: string;
  response: string;
  questionType?: PackageQuestionType;
}

export interface IPlaceOrderResponse extends IApplication {
  response: ICustomerPlaceOrderResponse[];
}

export interface IAssignApplication extends Document {
  readonly _id?: mongoose.Schema.Types.ObjectId;
  readonly application: mongoose.Schema.Types.ObjectId;
  readonly assigner: mongoose.Schema.Types.ObjectId;
  readonly assignee: mongoose.Schema.Types.ObjectId;
  readonly status?: AssignAppStatus;
  readonly createdAt?: IDate['createdAt'];
  readonly updatedAt?: IDate['updatedAt'];
}

export interface IAssignedApplicationDto {
  readonly applications: IAssignApplication['application'][];
  readonly assignee: IAssignApplication['assignee'];
}

export interface INewAssignApp {
  readonly application: IAssignApplication['application'];
  readonly assigner: IAssignApplication['assigner'];
  readonly assignee: IAssignApplication['assignee'];
}

export interface IProcessApplication extends Document {
  readonly _id?: mongoose.Schema.Types.ObjectId;
  readonly orderId: mongoose.Schema.Types.ObjectId;
  readonly taskId?: string;
  readonly currentTaskStatus: OrderProcessingStatus;
  readonly statusUpdatedAt: {
    status: OrderProcessingStatus;
    updateAt: IDate['createdAt'];
  }[];
  response: string;
  readonly createdAt?: IDate['createdAt'];
  readonly updatedAt?: IDate['updatedAt'];
}

export interface IDispatchOrderMailPayload {
  pkg: IPackage;
  app: IApplication;
  customer: IUser;
  merchant?: IUser;
  to?: string;
}

export interface IUpdateOrderParam {
  orderId: string;
}

export interface IFetchMerchantMonthlyAppCount {
  year: number;
}

export interface IAppMonthlyStatus {
  pending: number;
  cancelled: number;
  completed: number;
  processing: number;
}

export interface IAppMonthlyAppCount extends IAppMonthlyStatus {
  _id: { year: number; month: number };
}

export interface IFormattedAppMonthlyAppCount extends IAppMonthlyStatus {
  year: number;
  month: string;
}

export interface IApproveGrantApplication {
  applicationId: IApplication['_id'];
  approvedAmount: string;
}

export interface IRejectGrantApplication {
  applicationId: IApplication['_id'];
}

export interface IAcceptGrantApplication extends IRejectGrantApplication {}

export interface IDeclinceGrantApplication extends IRejectGrantApplication {}

// ORDER CART
export interface IOrderCart extends Document {
  _id?: Types.ObjectId;
  productId: Types.ObjectId;
  orderId: Types.ObjectId;
  userId: Types.ObjectId;
  isCheckedOut: boolean;
}

export interface IAddItemToCarDto {
  productId: Types.ObjectId;
  orderId: Types.ObjectId;
}

export interface IOrderPreviewDto {
  orders: string[];
  amount: number;
  from: 'CART' | 'ITEM';
}

export interface IOrderCheckoutDto {
  orderId?: string;
  items?: string[];
  amount: number;
}

export interface ISpotFlexPackageApplicationDto {
  deviceIds: IDevice['_id'][];
  packageId: IPackage['_id'];
}

export interface ISpotFlexOrder extends Document {
  deviceId: IDevice['_id'];
  packageId: IPackage['_id'];
  customer: IUser['_id'];
  status: SFOrderStatus;
  merchant: IUser['_id'];
  projectedDuration: number;
  projectedLoadCapacity: number;
  projectedAmount: number;
  actualDuration?: number;
  actualLoadCapacity?: number;
  actualAmount?: number;
}

export interface IDeviceDto {
  deviceId: IDevice['_id'];
  startDate: Date;
  endDate: Date;
  powerConsumption: number;
  isAutomatic: boolean;
}

export interface ISpotFlexOrderDto {
  devices: IDeviceDto[];
  packageId: IPackage['_id'];
  timeZone: string;
}

export interface IFlexibleDeviceDispatchEvent {
  devices: {
    device_id: string;
    dispatch?: {
      id: string;
      wpInHours: number;
    };
    start_date: Date;
    end_date: Date;
    power_consumption: number;
    time_zone: string;
  }[];
  rampType: RampType;
}
