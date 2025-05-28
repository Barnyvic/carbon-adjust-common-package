import mongoose, { Document } from 'mongoose';
import {
  PackageCategoryStatus,
  PackageQuestionType,
  PackageStatus,
  PackageType,
  AIPackageTypes,
  PackageDomain,
  InventoryAction,
  InventoryStatus,
  RampType,
  EnergyProvider,
} from '../enums/package.enum';
import { IDate } from './base.interface';
import { IUser } from './user.interface';
import { ISchedule } from './schedule.interface';

export interface IPackageCategory extends Document {
  name: string;
  readonly createdBy: mongoose.Schema.Types.ObjectId;
  slug: string;
  readonly createdAt?: IDate['createdAt'];
  readonly updatedAt?: IDate['updatedAt'];
  readonly status: PackageCategoryStatus;
  readonly isDefault: boolean;
  packageId: mongoose.Schema.Types.ObjectId | null;
  merchantIds?: IUser['_id'][];
}

export interface IPackageReview extends Document {
  readonly package: IPackage['_id'];
  readonly user: IUser['_id'];
  readonly rating: number;
  readonly description: string;
  readonly createdAt?: IDate['createdAt'];
  readonly updatedAt?: IDate['updatedAt'];
}

export interface IPackage extends Document {
  title: string;
  category: mongoose.Schema.Types.ObjectId;
  readonly packageType: PackageType;
  packageDomain: PackageDomain;
  description: string;
  price?: number;
  grantCode?: string;
  readonly currency?: string;
  discount?: number;
  readonly regions?: string[];
  readonly country?: string;
  readonly isSeen?: number;
  readonly createdAt?: IDate['createdAt'];
  readonly updatedAt?: IDate['updatedAt'];
  readonly hasSchedule?: boolean;
  readonly askPurchaserQuote?: boolean;
  readonly hasQuestion?: boolean;
  readonly allowPartPayment?: boolean;
  readonly percentPayment?: number;
  readonly status: PackageStatus;
  readonly owner: mongoose.Schema.Types.ObjectId;
  questions?: IPackageQuestion[];
  attachments?: string[];
  readonly publishedAt?: Date;
  readonly hasDownloadedableFile?: boolean;
  media?: string[];
  mediaVideos?: string[];
  videoUrl?: string;
  readonly isAiEnergyPackage?: boolean;
  energyBillQuestionId?: mongoose.Schema.Types.ObjectId;
  defaultDecarbonizationQuestions?: mongoose.Schema.Types.ObjectId[];
  readonly aiPackageType?: AIPackageTypes;
  minAmount?: number;
  maxAmount?: number;
  merchant?: mongoose.Schema.Types.ObjectId[];
  facilitators?: mongoose.Schema.Types.ObjectId[];
  rating?: number;
  // Inventry updates
  sku?: string;
  quantity?: number;
  quantityLeft?: number;
  inventoryStatus?: InventoryStatus;
  reOrderPoint?: number;
  carbonFootPrint?: number;
  colors?: string[];
  isDeleted: boolean;
  isFavourite: boolean;
  couponCode?: string;

  // Spot Flex Package
  rampType?: RampType;
  flexVolume?: number;
  loadCapacity?: number;
  energyProviders?: EnergyProvider[];
  locations?: string[];
  amount?: number;
  startDate?: Date;
  endDate?: Date;
  duration?: number;
  viewCount?: number;
  applicationLimit?: number;
  applicationRate?: number;

  // Two way publish
  isMerchantPublished?: boolean;
  isMerchantPublishedAt?: Date;
}

export interface IPackageQuestion {
  readonly _id?: mongoose.Schema.Types.ObjectId;
  readonly title: string;
  readonly questionType: PackageQuestionType;
  readonly options?: string[];
  optionKeys?: string[] | boolean[];
  questionKey?: string;
  readonly isRequired?: boolean;
  readonly isRequiredIf?: {
    referenceQuestion: mongoose.Schema.Types.ObjectId;
    referenceOption?: string;
  };
}

export interface ICreatePackageDto {
  readonly title: IPackage['title'];
  readonly description: IPackage['description'];
  readonly category: IPackage['category'];
  readonly askPurchaserQuote?: IPackage['askPurchaserQuote'];
  readonly price?: IPackage['price'];
  readonly discount?: IPackage['discount'];
  readonly regions?: IPackage['regions'];
  readonly country?: IPackage['country'];
  readonly allowPartPayment?: IPackage['allowPartPayment'];
  readonly percentPayment?: IPackage['percentPayment'];
  readonly hasSchedule?: IPackage['hasSchedule'];
  readonly hasQuestion?: IPackage['hasQuestion'];
  readonly questions?: IPackage['questions'];
  readonly packageType: IPackage['packageType'];
  readonly hasDownloadedableFile?: IPackage['hasDownloadedableFile'];
  readonly downloadedDoc?: string;
  readonly isAiEnergyPackage?: IPackage['isAiEnergyPackage'];
  readonly aiPackageType?: IPackage['aiPackageType'];

  // Inventry updates
  sku?: IPackage['sku'];
  quantity?: string;
  quantityLeft?: string;
  inventoryStatus?: IPackage['inventoryStatus'];
  reOrderPoint?: string;
  carbonFootPrint?: string;
  colors?: IPackage['colors'];
}

export interface ICreateGrantManagementDto extends Partial<ICreatePackageDto> {
  readonly grantCode: string;
  readonly minAmount: number;
  readonly maxAmount: number;
  readonly packageDomain: IPackage['packageDomain'];
  readonly merchant?: IPackage['merchant'];
  readonly facilitators?: IPackage['facilitators'];
}

export interface ICreatePackageCategory {
  name: IPackageCategory['name'];
}

export interface ICreatePackageReview {
  package: IPackage['_id'];
  rating: number;
  description: string;
}

export interface IPackageAndSchedule {
  package: IPackage;
  schedules?: ISchedule[];
}

export interface IHomepagePackages {
  category: {
    name: IPackageCategory['name'];
    slug: IPackageCategory['slug'];
  };
  packages: IPackage[];
}

export interface IGetPackagesDto {
  domain?: PackageDomain;
}

export interface IInventryHistory extends Document {
  packageId: mongoose.Schema.Types.ObjectId;
  creator: mongoose.Schema.Types.ObjectId;
  action: InventoryAction;
  by: number;
  comment?: string;
}

export interface IUpdatePackageInventryDto {
  quantity: number;
  action: InventoryAction;
  comment?: string;
}

export interface IDispatchInventryUpdateMailPayload {
  pkg: IPackage;
  merchant?: IUser;
  to?: string;
}

export interface IFavouritePackage extends Document {
  _id?: mongoose.Schema.Types.ObjectId;
  package: mongoose.Schema.Types.ObjectId;
  creator: mongoose.Schema.Types.ObjectId;
}

export interface IAddFavouritePackage {
  package: IPackage['_id'];
}

export interface IUpdateInventoryQuantityDto {
  quantity: number;
  action: InventoryAction;
  comment?: string;
}

export interface IUpdateInventoryPriceDto {
  price: number;
  comment?: string;
}

export interface ICreateSpotFlexPacakgeDto {
  title: string;
  packageType?: PackageType;
  description: string;
  rampType: RampType;
  flexVolume: number;
  loadCapacity: number;
  energyProviders: EnergyProvider[];
  locations: string[];
  applicationLimit: number;
  amount: number;
  startDate: Date;
  endDate: Date;
  startTime: string;
  endTime: string;
}

export interface IFlexibility extends Document {
  packageId: IPackage['_id'];
  deviceId: IPackage['_id'];
  deviceOwner: IUser['_id'];
  eligible: boolean;
  participated: boolean;
  appliedAt: Date;
}
