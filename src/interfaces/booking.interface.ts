import mongoose, { Document } from 'mongoose';
import { IDate } from './base.interface';
import { BookingStatus } from '../enums/booking.enum';
import { OrderActivityStatus } from 'src/enums/application.enum';

export interface IBooking extends Document {
  readonly schedule: mongoose.Schema.Types.ObjectId;
  readonly slot: mongoose.Schema.Types.ObjectId;
  readonly order: mongoose.Schema.Types.ObjectId;
  readonly appointmentDate?: IDate['createdAt'];
  readonly participants: mongoose.Schema.Types.ObjectId[];
  readonly createdAt?: IDate['createdAt'];
  readonly updatedAt?: IDate['updatedAt'];
  readonly status: BookingStatus;
}

export interface ICreateBooking {
  schedule: IBooking['schedule'];
  slot: IBooking['slot'];
  appointmentDate: IBooking['appointmentDate'];
}

export interface IUpdateOrderActivity {
  activityId: string;
  status: OrderActivityStatus;
}
