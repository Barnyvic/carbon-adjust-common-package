import mongoose, { Document } from 'mongoose';
import { PidCategory } from '../enums/pid.enum';

export interface IPid extends Document {
  readonly _id: mongoose.Schema.Types.ObjectId;
  pid: string;
  category: PidCategory;
  createdBy?: mongoose.Schema.Types.ObjectId;
  updatedBy?: mongoose.Schema.Types.ObjectId;
  deletedBy?: mongoose.Schema.Types.ObjectId;
  isDeleted: boolean;
}

export interface ICreatePidDto {
  pid: string;
  category: PidCategory;
}

export interface IUpdatePidDto {
  pid?: string;
  category?: PidCategory;
}
