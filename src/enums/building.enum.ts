export enum BuildingType {
  Residential = 'Residential',
  Commercial = 'Commercial',
}

export enum BuildingEventName {
  DISPATCH_BUILDING = 'building.dispatched.AI',
}

export enum EnergySource {
  Electrical = 'Electrical',
  Gas = 'Gas',
  Solar = 'Solar',
}

export enum OptimizationStatus {
  STARTED = 'started',
  FAILED = 'failed',
  PROCESSING = 'processing',
  COMPLETED = 'completed',
}
