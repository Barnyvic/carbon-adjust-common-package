import { Document, Types } from 'mongoose';
import { ModeOfTransportation, TransportationDetails } from 'src/enums';
import { ICarbonFootprintTracker } from './building.interface';

export interface IOptimizeTripQueueResponse {
  transport_id: string;
  coordinate: string;
  best_route: {
    route_emission: number;
    factor: {
      base_emission_factor: number;
      vehicle_factor: number;
      weather_factor: number;
      seasonal_factor: number;
    };
    estimated_arrival_time: number;
    estimated_distance: number;
    route_coordinate: string[][];
  };
  routes: Array<{
    route_emission: number;
    estimated_arrival_time: number;
    estimated_distance: number;
    route_coordinate: string[][];
  }>;
  min_emission: number;
  projected_arbitrage: number;
}

export interface ITransportation extends Document {
  transportPhoto?: string;
  transportID?: string;
  driversLicense?: string;
  licensePlateNumber: string;
  yearOfPurchase: number;
  owner: Types.ObjectId;
  vehicleManufacturer: string;
  carModel: string;
  fuelType: string;
  address?: string;
  city?: string;
  emissionFactor: number;
}

export interface ICoordinates {
  latitude: number;
  longitude: number;
  address?: string;
}

export interface IOptimizedTrip extends Document {
  startLocation: ICoordinates;
  destinationLocation: ICoordinates;
  modeOfTransport: ModeOfTransportation;
  transportDetails: TransportationDetails;
  plateNumber?: string;
  transportation?: Types.ObjectId;
  owner: Types.ObjectId;
  carName?: string;
  startTimeWindow?: string;
  durationOfTravelWindow?: string;
  latestArrivalTime?: string;
  orderId?: string;
}

export interface IVehicleInfoResponse {
  artEndDate: string;
  co2Emissions: number;
  colour: string;
  engineCapacity: number;
  fuelType: string;
  make: string;
  markedForExport: boolean;
  monthOfFirstRegistration: string;
  motStatus: string;
  registrationNumber: string;
  revenueWeight: number;
  taxDueDate: string;
  taxStatus: string;
  typeApproval: string;
  wheelplan: string;
  yearOfManufacture: number;
  euroStatus: string;
  realDrivingEmissions: string;
  dateOfLastV5CIssued: string;
}

export interface ITransportDetails {
  orderId: string;
  optimizedTripId: string;
  transport_id?: string;
  packageName: string;
  route_coordinate: string;
  vehicle_plate: string;
  transport_mode: string;
  window_start: string;
  latest_arrival: string;
  window: number;
  time_zone: string;
}

export interface IOptimizedTripQueueResponse extends Document {
  orderId: string;
  taskId: string;
  optimizedTripId: Types.ObjectId;
  status?: string;
  response: Record<string, any>;
}

export interface ITripDetails {
  optimizedTripId: string;
  status?: string;
  response?: IOptimizeTripQueueResponse;
  startLocation: ICoordinates;
  destinationLocation: ICoordinates;
  modeOfTransport: string;
  transportDetails: string;
  startTimeWindow: string;
  durationOfTravelWindow: string;
  routePreference: string;
  latestArrivalTime: string;
  transportationDetails?: {
    carModel?: string;
    vehicleManufacturer?: string;
    fuelType?: string;
    licensePlateNumber?: string;
    emissionFactor?: number;
    owner?: string;
  };
}

export interface ITrendline {
  consumption_trendline: number;
  price_trendline: number;
  policy_effect_trendline: number;
}

export interface ITransitionScore {
  short: ITrendline;
  medium: ITrendline;
  long: ITrendline;
  score: number;
}

export interface IAggregateEnergyBill {
  current_electricity_charge: number;
  current_electricity_demand: number;
  current_gas_charge: number;
  current_gas_demand: number;
  average_carbon_intensity: number;
  total_billing_period: string[];
}

export interface ITransportAnalytics {
  transition_score: ITransitionScore;
  carbon_footprint_tracker: ICarbonFootprintTracker;
  aggregate_energy_bill: IAggregateEnergyBill;
  transport_ids: string[];
}
