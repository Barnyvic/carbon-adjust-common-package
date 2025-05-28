import { OrderStatus } from '../enums/application.enum';
import { PaymentStatus } from '../enums/payment.enum';

export interface IVerifyEmailPayload {
  to: string;
  code?: string;
}

export interface IVerifyFacilitatorEmailPayload {
  to: string;
  name: string;
  email: string;
  password: string;
}

export interface IVerifyStaffEmailPayload {
  to: string;
  name: string;
  email: string;
  password: string;
}

export interface IInviteMerchantEmailPayload {
  to: string;
  name: string;
  email: string;
}

export interface IPasswordResetEmailPayload {
  to: string;
  code: string;
  name: string;
}

export interface IPasswordResetConfirmationPayload {
  to: string;
  date: Date;
  name: string;
}

export interface IHOAggNotifyEmailPayload {
  hoName: string;
  appRef: string;
  aggName: string;
  aggOrg: string;
  to: string;
  reviewLink: string;
}

export interface IHOHIANotifyEmailPayload {
  appRef: string;
  hoName: string;
  to: string;
}

export interface IReviewHONotifyEmailPayload {
  name: string;
  appRef: string;
  reviewerType: string;
  aggOrg: string;
  to: string;
  reviewLink: string;
}

export interface IHOStatusReviewNotifyEmailPayload {
  hoName: string;
  to: string;
}

export interface IAddStaffNotifyEmailPayload {
  name: string;
  initiator: string;
  to: string;
  password: string;
  isAdmin?: boolean;
}

export interface INewAsiggnedAppNotifyEmailPayload {
  name: string;
  to: string;
}

export interface IOrderUpdateNotifyEmailPayload
  extends INewAsiggnedAppNotifyEmailPayload {
  orderId: string;
  packageName: string;
  quantity: number;
  status: OrderStatus;
}

export interface IChangePasswordNotifyEmailPayload {
  name: string;
  to: string;
  dateUpdated: Date;
}

export interface IHIAOfferReviewNotification {
  hiaName: string;
  appRef: string;
  hoName: string;
  reviewLink: string;
  to: string;
}

export interface INewContractNotification {
  appRef: string;
  hiaName: string;
  reviewLink: string;
  to: string;
}

export interface IHIANotifyEmailPayload {
  appRef: string;
  to: string;
  reviewLink: string;
}

export interface IHOFINNotifyEmailPayload {
  appRef: string;
  hoName: string;
  to: string;
  fin?: string;
  ins?: string;
}

export interface IFINotifyEmailPayload {
  appRef: string;
  fin?: string;
  ins?: string;
  to: string;
  reviewLink: string;
}

export interface IContactUsNotifyEmailPayload {
  from: string;
  to: string;
  message: string;
  name: string;
}

export interface IMerchantNotifyEmailPayload {
  orderNumber: string;
  orderDate: Date;
  currency: string;
  products: {
    name: string;
    price: number;
  }[];
  status: PaymentStatus;
}

export interface IMerchantNotifyInventryStatusPayload {
  merchant: {
    name: string;
    email: string;
  };
  pkg: {
    quantity: number;
    title: string;
    quantiyLeft: number;
    inventoryStatus: string;
  };
  to?: string;
}

export interface IMerchantNotifyCouponStatusPayload {
  merchant: {
    name: string;
    email: string;
  };
  coupon: {
    name: string;
    amount: number;
    couponCode: string;
    couponStatus: string;
  };
  to?: string;
}

export interface IInfluencerNotifyCouponStatusPayload {
  influencer?: {
    name?: string;
    email: string;
  };
  coupon: {
    name: string;
    amount: number;
    couponCode: string;
    couponStatus: string;
  };
  to?: string;
}

export interface IPaymentRequestEmailPayload {
  merchantName: string;
  merchantEmail: string;
  amount: number;
  currency: string;
  requestId: string;
  adminNote?: string;
}

export interface IStripeVerificationEmailPayload {
  merchantName: string;
  merchantEmail: string;
  to?: string;
}

export interface IViewVirtualCardRequestOtpEmailPayload {
  userName: string;
  email: string;
  otp: string;
}

export interface IHOFlexibleDeviceNotifyEmailPayload {
  deviceName?: string;
  hoName: string;
  to: string;
}
