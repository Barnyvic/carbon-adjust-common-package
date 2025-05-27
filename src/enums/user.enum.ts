export enum UserStatus {
  UNVERIFIED = 'unverified',
  PENDING = 'pending',
  COMPLETED = 'completed',
  REJECTED = 'rejected',
  SUSPENDED = 'suspended',
  DEACTIVATED = 'DEACTIVATED',
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  BLOCKED = 'blocked',
}

export enum UserStatusDto {
  CONFIRMED = 'confirmed',
  DECLINED = 'declined',
  SUSPENDED = 'suspended',
}

export enum UserHomeOwnershipStatus {
  OWNED = 'Owned',
  MORTGAGED = 'Mortgaged',
  RENTED = 'Rented',
  VACANT = 'Vacant',
  INHERITED = 'Inherited',
  OTHER = 'Other',
}

export enum UserHouseType {
  APARTMENT = 'Apartment',
  CONDO = 'Condo',
  TOWNHOUSE = 'Townhouse',
  SINGLE_FAMILY_HOME = 'Single Family Home',
  DUPLEX = 'Duplex',
  VILLA = 'Villa',
  MANSION = 'Mansion',
  OTHER = 'Other',
}

export enum UserDocType {
  Passport = 'Passport',
  License = 'Driver License',
  Permit = 'Resident Permit',
  OTHERS = 'Others',
}

export enum OrgDocType {
  CertificateOfIncorpation = 'Certificate of Incorporation',
  LetterOfAuthorization = 'Letter of Authorization',
  CertficateOfAuthorization = 'Certificate of Authorization',
  IdOfContactPerson = 'Contact Person ID',
  ProfessionlCertificate = 'Professional Certificate',
}

export enum StaffAccessDto {
  FULL = 'FULL',
  RESTRICTED = 'RESTRICTED',
}

export enum MerchantRoles {
  SUPER_MERCHANT = 'SUPER_MERCHANT',
  INTERNAL_MERCHANT = 'INTERNAL_MERCHANT',
  REPORT_MERCHANT = 'REPORT_MERCHANT',
  GRANT_MERCHANT = 'GRANT_MERCHANT',
  AGGREGATOR_MERCHANT = 'AGGREGATOR_MERCHANT',
}

export enum MerchantRoleAppStatus {
  Declined = 'Declined',
  Approved = 'Approved',
  Applied = 'Applied',
}
