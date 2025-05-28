import mongoose, { Document } from 'mongoose';
import {
  AssetType,
  AssetApprovalStatus,
  AssetRequestReason,
} from '../enums/asset.enum';
import { IStaffMember } from './staff.interface';
import { IUnit } from './unit.interface';
import { ISubUnit } from './subunit.interface';
import { IDevice } from './devices.interface';
import { IBuilding } from './building.interface';

export interface IAsset extends Document {
  readonly _id?: mongoose.Schema.Types.ObjectId;
  deviceId?: IDevice['_id'];
  buildingId?: IBuilding['_id'];
  assetType: AssetType;
  approvalStatus?: AssetApprovalStatus;
  reason?: AssetRequestReason;
  staff?: IStaffMember['_id'];
  unit?: IUnit['_id'];
  subUnit?: ISubUnit['_id'];
  readonly createdAt: Date;
  readonly updatedAt: Date;
}

export interface IPopulatedAsset extends Omit<IAsset, 'unit'> {
  unit: IUnit;
}

export interface IAssetRequestDetails {
  _id: string;
  staff: {
    _id: string;
    fullName: string;
    profilePicture?: string;
    jobTitle: string;
  };
  unit: {
    _id: string;
    name: string;
  };
  assetType: AssetType;
  approvalStatus: AssetApprovalStatus;
  reason: AssetRequestReason;
  deviceId?: string;
  buildingId?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IPaginationMeta {
  totalRecords: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
}

export interface IAssetRequestResponse {
  requests: IAssetRequestDetails[];
  pagination: IPaginationMeta;
}

export interface IDeviceRequestDetails {
  deviceName: string;
  requestDate: Date;
  approvalStatus: AssetApprovalStatus;
  dispatchTime?: Date;
  dispatchWindow?: number;
  projectedCarbonOffset?: number;
  actualCarbonOffset?: number;
  actualEmission?: number;
  staff: {
    fullName: string;
    profilePicture: string;
    jobTitle: string;
  };
  unit: {
    name: string;
  };
}
