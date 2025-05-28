import mongoose, { Document } from 'mongoose';
import {
  BuildingType,
  EnergySource,
  OptimizationStatus,
} from '../enums/building.enum';
import { IDate } from './base.interface';
import { IUser } from './user.interface';
import { BuildingDispatchStatus } from '../enums/dispatch.enum';
import { AssetApprovalStatus } from '../enums/asset.enum';
import { IAggregateEnergyBill, ITransitionScore } from './transport.interface';

export interface IBuilding extends Document {
  readonly _id?: mongoose.Schema.Types.ObjectId;
  readonly serialNumber: string;
  houseType: BuildingType;
  readonly occupants: number;
  readonly energySource: EnergySource;
  file?: string;
  address: IBuildingAddress;
  readonly numberOfFloors: number;
  readonly voltageLevel: number;
  readonly optimizationStatus?: OptimizationStatus;
  creator: IUser['_id'];
  devices: mongoose.Schema.Types.ObjectId[];
  readonly createdAt?: IDate['createdAt'];
  readonly updatedAt?: IDate['updatedAt'];
}

export interface IBuildingEnergyBill extends Document {
  readonly _id?: mongoose.Schema.Types.ObjectId;
  url: string;
  billName: string;
  date: Date;
  buildingId: mongoose.Schema.Types.ObjectId;
  energy_bill_id?: string;
  isDeleted: boolean;
}

export interface IBuildingAddress {
  country: string;
  cityOrProvince: string;
  firstLineAddress: string;
  postalCode: string;
}

export interface IBuildingDto {
  house_type: BuildingType;
  occupants: number;
  energy_source: EnergySource;
  country: string;
  city: string;
  address: string;
  number_of_floors: number;
  voltage_level: number;
  postal_code: string;
}

export interface IDispatchBuilding extends Document {
  _id?: mongoose.Schema.Types.ObjectId;
  buildingId: IBuilding['_id'];
  taskId?: string;
  building_id?: string;
  energy_bill_id?: string;
  creator: mongoose.Schema.Types.ObjectId;
  status?: BuildingDispatchStatus;
  transitionScore: ITransitionScore;
  carbonFootprintTracker: ICarbonFootprintTracker;
  aggregateEnergyBill: IAggregateEnergyBill;
  readonly createdAt?: IDate['createdAt'];
  readonly updatedAt?: IDate['updatedAt'];
}

export interface ITransitionData {
  consumptionTrendline: number;
  priceTrendLine: number;
  policyEffectTrendLine: number;
}

export interface ICarbonFootprintTracker {
  carbonFootprint: number;
  averageFootprint: number;
  highFootprint: number;
}

export interface IBuildingAIResponseData {
  bill_ids: any[];
  transition_score: {
    short: {
      consumption_trendline: number;
      price_trendline: number;
      policy_effect_trendline: number;
    };
    medium: {
      consumption_trendline: number;
      price_trendline: number;
      policy_effect_trendline: number;
    };
    long: {
      consumption_trendline: number;
      price_trendline: number;
      policy_effect_trendline: number;
    };
    score: number;
  };
  carbon_footprint_tracker: {
    carbon_footprint: number;
    average_footprint: number;
    high_footprint: number;
  };
  aggregate_energy_bill: {
    current_electricity_charge: number;
    current_electricity_demand: number;
    current_gas_charge: number;
    current_gas_demand: number;
    average_carbon_intensity: number;
    total_billing_period: string[];
  };
  building_id: string;
}

export interface BuildingError {
  path: string;
  value?: string;
  message: string;
}

export interface IAddDevicesToBuilding {
  devices: mongoose.Schema.Types.ObjectId[];
}

export interface IBuildingRequestDetails {
  buildingId: string;
  serialNumber: string;
  energySource: EnergySource;
  approvalStatus: AssetApprovalStatus;
  occupants: number;
  houseType: BuildingType;
  requestDate: Date;
  staff: {
    fullName: string;
    profilePicture: string;
    jobTitle: string;
  };
  unit: {
    name: string;
  };
}
