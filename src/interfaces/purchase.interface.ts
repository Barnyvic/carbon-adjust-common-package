import { Document, Types } from 'mongoose';
import { IDate } from './base.interface';
import {
  PurchaseDispatchStatus,
  PurchaseOptimizationStatus,
} from '../enums/purchase.enum';

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

export interface IPurchase extends Document {
  readonly _id?: Types.ObjectId;
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
  creator: Types.ObjectId;
  unit?: Types.ObjectId;
  subUnit?: Types.ObjectId;
  readonly createdAt?: IDate['createdAt'];
  readonly updatedAt?: IDate['updatedAt'];
}

export interface IDispatchPurchase extends Document {
  _id?: Types.ObjectId;
  purchaseId: Types.ObjectId;
  taskId?: string;
  purchase_id?: string;
  creator: Types.ObjectId;
  status?: PurchaseDispatchStatus;
  readonly createdAt?: IDate['createdAt'];
  readonly updatedAt?: IDate['updatedAt'];
}

export interface IPurchaseTrendline {
  consumptionTrendline: number;
  priceTrendline: number;
  policyEffectTrendline: number;
}

export interface IPurchaseTransitionScore {
  short: IPurchaseTrendline;
  medium: IPurchaseTrendline;
  long: IPurchaseTrendline;
  score: number;
}

export interface IPurchaseCarbonFootprintTracker {
  carbonFootprint: number;
  averageFootprint: number;
  highFootprint: number;
}

export interface IAggregateBill {
  currentElectricityCharge: number;
  currentElectricityDemand: number;
  currentGasCharge: number;
  currentGasDemand: number;
  averageCarbonIntensity: number;
}

export interface IPurchaseTrendlineResponse {
  consumption_trendline: number;
  price_trendline: number;
  policy_effect_trendline: number;
}

export interface IPurchaseTransitionScoreResponse {
  created_at: string;
  updated_at: string;
  bill_id: string;
  short: IPurchaseTrendlineResponse;
  medium: IPurchaseTrendlineResponse;
  long: IPurchaseTrendlineResponse;
  score: number;
  current_electricity_charge: number;
  current_electricity_demand: number;
  current_gas_charge: number;
  current_gas_demand: number;
  average_carbon_intensity: number;
}

export interface IPurchaseCarbonFootprintTrackerResponse {
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

export interface IAggregateBillResponse {
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
  transition_score: IPurchaseTransitionScoreResponse;
  carbon_footprint_tracker: IPurchaseCarbonFootprintTrackerResponse;
  aggregate_bill: IAggregateBillResponse;
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
