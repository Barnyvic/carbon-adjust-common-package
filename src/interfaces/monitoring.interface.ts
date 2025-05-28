import { PageName, SubLevelEvent } from '../enums/monitoring.enum';

export interface IHandShakeQuery {
  deviceToken?: string;
  EIO: string;
  transport: string;
  userId: string;
}

export interface IPageViewDto {
  name: PageName;
  userId: string;
  browser: string;
  os: string;
  time: number;
}

export interface IAddToBasketEventPayload {
  packageId: string;
  packageName: string;
  pakageType: string;
  packageCategory: string;
  packagePrice: number;
  time: number;
  userId: string;
  eventName: SubLevelEvent;
}

export interface ICancelAddToBasketEventPayload
  extends IAddToBasketEventPayload {}

export interface IOrderSummaryEventPayload extends IAddToBasketEventPayload {}

export interface IInitializeEventPayload extends IAddToBasketEventPayload {
  country: string;
  city: string;
}

export interface IOrderEventPayload {
  orderId: string;
  userId: string;
  time: number;
  eventName: SubLevelEvent;
}

export interface IOrderPaymentEventPayload extends IOrderEventPayload {
  amount: number;
}

export interface IOrderPaymentSuccessEventPayload extends IOrderEventPayload {
  success: false;
}

export interface IOrderPaymentFailureEventPayload
  extends IOrderPaymentSuccessEventPayload {}

export interface IOrderBookingEventPayload extends IOrderEventPayload {}

export interface ILoginEventPayload {
  userId: string;
  time: string;
  eventName: SubLevelEvent;
}

export interface ILoginOutPayload extends ILoginEventPayload {}
