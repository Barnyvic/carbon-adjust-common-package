import mongoose, { Document } from 'mongoose';
import { IStaffMember } from './staff.interface';
import { IUnit } from './unit.interface';

export interface ISubUnit extends Document {
  _id: mongoose.Schema.Types.ObjectId;
  name: string;
  description?: string;
  parentUnit: IUnit['_id'];
  staff: IStaffMember['_id'][];
  subUnitAdmin?: IStaffMember['_id'];
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}
