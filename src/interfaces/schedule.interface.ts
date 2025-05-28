import mongoose, { Document } from 'mongoose';
import {
  ScheduleStatus,
  ScheduleDay,
  SlotStatus,
  Days,
  StartTime,
  Endtime,
  SlotDuration,
  ScheduleSlotDuration,
} from '../enums/schedule.enum';
import { IDate } from './base.interface';
import { IPackage } from './package.interface';

export interface ISchedule extends Document {
  readonly _id?: mongoose.Schema.Types.ObjectId;
  readonly day: ScheduleDay;
  readonly shortDay: string;
  readonly package: mongoose.Schema.Types.ObjectId;
  readonly createdBy: mongoose.Schema.Types.ObjectId;
  readonly availabilityWindow: string;
  readonly createdAt?: IDate['createdAt'];
  readonly updatedAt?: IDate['updatedAt'];
  status: ScheduleStatus;
  readonly slotDuration: ScheduleSlotDuration;
  slots: mongoose.Schema.Types.ObjectId[];
}

export interface IScheduleSlot extends Document {
  readonly _id?: mongoose.Schema.Types.ObjectId;
  readonly desc: string;
  readonly schedule: mongoose.Schema.Types.ObjectId;
  readonly createdBy: mongoose.Schema.Types.ObjectId;
  readonly createdAt?: IDate['createdAt'];
  readonly updatedAt?: IDate['updatedAt'];
  status?: SlotStatus;
}

export interface IScheduleMetadata {
  days: string[];
  startTimes: string[];
  endTimes: string[];
  slotDuration: string[];
}

export interface IGeneratePackageScheduleDto {
  day: Days;
  startTime: StartTime;
  endTime: Endtime;
  slotDuration: SlotDuration;
}

export interface IGeneratePackageScheduleSlot {
  packageId: IPackage['_id'];
  schedules: IGeneratePackageScheduleDto[];
}

export interface ICreateScheduleSlot {
  readonly desc: IScheduleSlot['desc'] | string;
  readonly schedule: IScheduleSlot['schedule'] | string;
  readonly createdBy: IScheduleSlot['createdBy'] | string;
}

export interface IGenerateScheduleSlotResponse {
  schedule: ISchedule;
  slots: IScheduleSlot[];
}

export interface IActivateSinglePackageSchedule {
  slots: string[];
  schedule: string;
}

export interface IActivateSlotDto {
  schedules: IActivateSinglePackageSchedule[];
}
