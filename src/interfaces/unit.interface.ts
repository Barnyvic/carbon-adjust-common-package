import mongoose, { Document } from 'mongoose';
import { IUser } from './user.interface';
import { ISubUnit } from './subunit.interface';
import { IStaffMember } from './staff.interface';

export interface IUnit extends Document {
  readonly _id?: mongoose.Schema.Types.ObjectId;
  name: string;
  unitFunction?: string;
  corporateAdmin: IUser['_id'];
  unitAdmin?: IStaffMember['_id'];
  subUnit?: ISubUnit['_id'];
  staff?: IStaffMember['_id'][];
  readonly createdAt: Date;
  readonly updatedAt: Date;
}

export interface IStaffDetails {
  staffId: string;
  name: string;
  jobTitle: string;
  profilePicture: string;
  isUnitAdmin: boolean;
  isSubUnitAdmin: boolean;
}

export interface ISubUnitDetails {
  subUnitId: string;
  name: string;
  description: string;
  staffCount: number;
  staff: IStaffDetails[];
}

export interface IUnitStats {
  unitId: string;
  name: string;
  unitFunction: string;
  totalStaff: number;
  totalSubUnits: number;
  staff: IStaffDetails[];
  subUnits: ISubUnitDetails[];
}

export interface IOverallStats {
  totalUnits: number;
  totalStaff: number;
  totalSubUnits: number;
  units: IUnitStats[];
}
