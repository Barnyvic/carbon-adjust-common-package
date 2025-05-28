import mongoose, { Document } from 'mongoose';
import { IDate } from './base.interface';
import { PurchaseDispatchStatus } from '../enums/rabbitmq.enum';
import { IUser } from './user.interface';
import { PurchaseOptimizationStatus } from '../enums/purchase.enum';
import { IUnit } from './corporate-users-department.interface';
import { ISubUnit } from './corporate-users-department.interface';

export interface IPurchase extends Document {
  readonly _id?: mongoose.Schema.Types.ObjectId;
  dateOfUpload: IDate['createdAt'];
  totalEmission?: number;
  readonly documentsUploaded: number;
  attachments: string[];
  scope1Emission?: number;
  scope2Emission?: number;
  scope3Emission?: number;
  transitionScore?: number;
  carbornFootPrint?: number;
  percentageContribution?: number;
  optimizationStatus?: PurchaseOptimizationStatus;
  creator: IUser['_id'];
  unit?: IUnit['_id'];
  subUnit?: ISubUnit['_id'];
  readonly createdAt?: IDate['createdAt'];
  readonly updatedAt?: IDate['updatedAt'];
}

export interface IDispatchPurchase extends Document {
  _id?: mongoose.Schema.Types.ObjectId;
  purchaseId: IPurchase['_id'];
  taskId?: string;
  purchase_id?: string;
  creator: mongoose.Schema.Types.ObjectId;
  status?: PurchaseDispatchStatus;
  readonly createdAt?: IDate['createdAt'];
  readonly updatedAt?: IDate['updatedAt'];
}

export interface IAggregateBill {
  currentElectricityCharge: number;
  currentElectricityDemand: number;
  currentGasCharge: number;
  currentGasDemand: number;
  averageCarbonIntensity: number;
}

interface Trendline {
  consumption_trendline: number;
  price_trendline: number;
  policy_effect_trendline: number;
}

interface TransitionScore {
  created_at: string;
  updated_at: string;
  bill_id: string;
  short: Trendline;
  medium: Trendline;
  long: Trendline;
  score: number;
  current_electricity_charge: number;
  current_electricity_demand: number;
  current_gas_charge: number;
  current_gas_demand: number;
  average_carbon_intensity: number;
}

interface CarbonFootprintTracker {
  created_at: string;
  updated_at: string;
  bill_id: string;
  carbon_footprint: number;
  current_electricity_charge: number;
  current_electricity_demand: number;
  current_gas_charge: number;
  current_gas_demand: number;
  average_carbon_intensity: number;
  average_footprint: number;
  high_footprint: number;
}

interface AggregateBill {
  current_electricity_charge: number;
  current_electricity_demand: number;
  current_gas_charge: number;
  current_gas_demand: number;
  average_carbon_intensity: number;
}

export interface IPurchaseAIResponseData {
  cummulative_emission_scope: {
    scope_1: number;
    scope_2: number;
    scope_3: number;
  };
  total_emission: number;
  percentage_contribution: number;
  transition_score: TransitionScore;
  carbon_footprint_tracker: CarbonFootprintTracker;
  aggregate_bill: AggregateBill;
  purchase_ids: string[];
}

export interface IDispatchPurchaseEvent {
  dispatchPurchase: IDispatchPurchase;
  billUrls: string[];
}

export interface IGetChartResponseDto {
  purchase_ids: string[];
}

export interface IDateTimeFilterDto {
  startDate?: Date;
  endDate?: Date;
}
