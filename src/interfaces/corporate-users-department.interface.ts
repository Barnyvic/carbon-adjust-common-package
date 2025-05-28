import { Document, Types } from 'mongoose';

export interface IUnit extends Document {
  readonly _id?: Types.ObjectId;
  name: string;
  unitFunction?: string;
  corporateAdmin: Types.ObjectId;
  unitAdmin?: Types.ObjectId;
  subUnit?: Types.ObjectId;
  staff?: Types.ObjectId[];
  readonly createdAt: Date;
  readonly updatedAt: Date;
}

export interface ISubUnit extends Document {
  _id: Types.ObjectId;
  name: string;
  description?: string;
  parentUnit: Types.ObjectId;
  staff: Types.ObjectId[];
  subUnitAdmin?: Types.ObjectId;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}
