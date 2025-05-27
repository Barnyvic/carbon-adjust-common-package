import { Document } from 'mongoose';
import {
  AppRoles,
  MerchantType,
  NonFinancialMerchantType,
  StaffAccessLevel,
} from '../enums/roles.enum';
import { UserStatus, UserDocType } from '../enums/user.enum';
import { IUserAddress } from './base.interface';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  hasAcceptTerms: boolean;
  roles: AppRoles[];
  status: UserStatus;
  address?: IUserAddress;
  statusUpdatedBy?: string;
  statusUpdatedAt?: Date;
  passwordUpdatedAt?: Date;
  hasEmailVerified?: boolean;
  activationCode?: string;
  activationExpiry?: string;
  emailActivatedAt?: Date;
  hasPhoneNosVerified?: boolean;
  phoneVerifyToken?: number;
  phoneNosVerifiedAt?: Date;
  phoneNos?: string;
  dp?: string;
  step?: number;
  merchantType?: MerchantType;
  nonFinMerchantType?: NonFinancialMerchantType;
  doc?: {
    idType: string;
    url: string;
    displayName?: string;
  }[];
  dateFormed?: Date;
  contactName?: string;
  bio?: string;
  contactEmail?: string;
  passwordLastResetAt?: Date;
  creator?: string;
  accessLevel?: StaffAccessLevel[];
  isInternalMerchant?: boolean;
  isReportMerchant?: boolean;
  isSuperMerchant?: boolean;
  isGrantMerchant?: boolean;
  lastLoginDate?: Date;
  carbonProgress?: {
    totalEstimatedOffset: number;
    currentActualOffset: number;
    lastUpdated: Date;
  };
  currentCountry?: string;
  tokenVersion?: number;
  tuyaUserId?: string;
}

export interface IHomeOccupant {
  adult?: number;
  children?: number;
}

export interface IUserDoc {
  idType: string | UserDocType;
  url: string;
  displayName?: string;
}

export interface IEnergySupplier extends Document {
  name: string;
  tariffName: string;
  energySource?: string;
  user: IUser['_id'];
}

export interface ICorporateUserDetails extends Document {
  userId?: IUser['_id'];
  organizationName: string;
  phoneNumber: string;
  dateOfFormation: Date;
  contactName: string;
  contactEmail: string;
  bio: string;
  countryOfFormation: string;
  cityProvinceState?: string;
  firstLineOfAddress?: string;
  zipCode?: string;
  idOfContactPerson: string;
  certificationOfIncorporation: string;
  letterOfAuthorizationToOpenAccount: string;
}

export interface IUserRegisterResponse {
  readonly name: IUser['name'];
  readonly email: IUser['email'];
  readonly phoneNos: IUser['phoneNos'];
  readonly hasAcceptTerms: IUser['hasAcceptTerms'];
  readonly roles: IUser['roles'];
  readonly status: IUser['status'];
  readonly nonFinMerchantType?: IUser['nonFinMerchantType'];
  readonly merchantType?: IUser['merchantType'];
}

export interface IUpdateUserBioDataDto {
  email: IUser['email'];
  name: IUser['name'];
  phoneNos: IUser['phoneNos'];
}

export interface IUserBioDataResponse extends IUserRegisterResponse {
  step: IUser['step'];
}

export interface IUpdateAddressDto {
  address: IUser['address'];
}

export interface IUserAddressResponse extends IUserBioDataResponse {
  address: IUserAddress;
}

export interface IUserDocResponse extends IUserAddressResponse {
  doc: IUser['doc'];
}

export interface IUpdateOrgBioDataDto {
  dateFormed: IUser['dateFormed'];
  contactName: IUser['contactName'];
  bio: IUser['bio'];
  name: IUser['name'];
  contactEmail: IUser['contactEmail'];
  nonFinMerchantType?: IUser['nonFinMerchantType'];
  merchantType?: IUser['merchantType'];
}

export interface IOrgBioDataResponse extends IUserRegisterResponse {
  dateFormed: IUser['dateFormed'];
  contactName: IUser['contactName'];
  bio: IUser['bio'];
  step: IUser['step'];
  nonFinMerchantType: IUser['nonFinMerchantType'];
}

export interface IUserIMultipleDoc {
  contactPersonIdType: UserDocType;
  contactPersonIdFileIndex: number;
  certOfIncFileIndex: number;
  letterOfAuthfileIndex: number;
}

export interface IUpdateUserStatus {
  userId: string;
  status: UserStatus;
}

export interface IUpdateInternalMerchantStatus {
  merchantId: string;
  status: boolean;
}

export interface IUpdateUserStatusResponse {
  userId: string;
  status: UserStatus;
  updatedAt: Date;
}

export interface IAddStaffDto {
  firstName: string;
  surname: string;
  email: string;
  accessLevel: StaffAccessLevel;
}

export interface IChangePassword {
  oldPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}

export interface IChangePasswordResponse {
  passwordUpdatedAt: Date;
  hasUpdated: boolean;
}

export interface IContactUs {
  name: string;
  from: string;
  message: string;
}

export interface IUpdateProfileDto {
  contactEmail?: string;
  contactName?: string;
  address?: IUserAddress;
  lastLoginDate?: Date;
}

export interface IPasswordResetToken extends Document {
  readonly userId: string;
  readonly token: string;
  readonly tokenExpiry: Date;
  readonly createdAt?: Date;
  readonly updatedAt?: Date;
}

export interface IPasswordResetTokenDto {
  readonly userId: IUser['_id'];
  readonly token: IPasswordResetToken['token'];
  readonly tokenExpiry: IPasswordResetToken['tokenExpiry'];
}

export interface IPasswordResetEmail {
  email: string;
}

export interface IPasswordResetDto {
  token: string;
  password: string;
  confirmPassword: string;
}

export interface IResendPhoneNoTokenDto {
  phoneNos: string;
}

export interface IAssignCountryToStaffDto {
  staffId: string;
  country: string;
}

export interface IMerchantRoleApp extends Document {
  userId: IUser['_id'];
  applicationType: AppRoles;
  status: string;
  serviceRendered: string;
  applicationDocs?: string;
}
