import mongoose, { Document } from 'mongoose';
import { StaffAccessLevel } from '../enums/staff.enum';
import { IUnit } from './unit.interface';
import { ISubUnit } from './subunit.interface';
import { IUser } from './user.interface';
import { ReceiptStatus } from '../enums/asset.enum';

export interface IStaffMember extends Document {
  readonly _id?: mongoose.Schema.Types.ObjectId;
  userId: IUser['_id'];
  jobTitle: string;
  auThorizationLevel: StaffAccessLevel;
  unit: IUnit['_id'];
  subUnit?: ISubUnit['_id'];
  isApproved: boolean;
  approvedAt?: Date;
  isUnitAdmin?: boolean;
  isSubUnitAdmin?: boolean;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}

export interface IFileInfo {
  name: string;
  mimetype: string;
  size: number;
  encoding: string;
  buffer: string;
}

export interface IReceipt extends Document {
  readonly _id?: mongoose.Schema.Types.ObjectId;
  uploader: IStaffMember['_id'];
  unit: IUnit['_id'];
  subUnit?: ISubUnit['_id'];
  files: IFileInfo[];
  status: ReceiptStatus;
  approvedBy?: IStaffMember['_id'];
  approvedAt?: Date;
  rejectionReason?: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
