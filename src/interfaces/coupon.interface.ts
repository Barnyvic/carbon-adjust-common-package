import { Document, Types } from 'mongoose';
import { CouponStatus } from '../enums/coupon.enum';

export interface ICoupon extends Document {
  _id?: Types.ObjectId;
  name: string;
  email: string;
  code: string;
  limitAmount: number;
  amount: number;
  amountUsed: number;
  products: Types.ObjectId[];
  startDate: Date;
  endDate: Date;
  status: CouponStatus;
  creator: Types.ObjectId;
  revenue: number;
  country?: string;
}

export interface ICreateCouponDto {
  name: ICoupon['name'];
  email: ICoupon['email'];
  limitAmount: ICoupon['limitAmount'];
  amount: ICoupon['amount'];
  startDate: ICoupon['startDate'];
  endDate: ICoupon['startDate'];
  products: ICoupon['_id'][];
  couponCode: string;
}

export interface IApplyCouponDto {
  couponCode: string;
  orderIds?: Types.ObjectId[];
  orderId?: Types.ObjectId;
}

export interface IActivateCouponDto {
  couponId: ICoupon['_id'];
}

export interface IDeactivateCouponDto {
  couponId: ICoupon['_id'];
}

export interface IActivateCouponMailPayload {
  coupon: ICoupon;
}

export interface IDeactivateCouponMailPayload {
  coupon: ICoupon;
} 