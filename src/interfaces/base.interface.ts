export interface IGenericResponseModel<T = any> {
  apiId?: string;
  error?: string;
  message?: string;
  data: T;
  statusCode?: number;
}

export interface IUserAddress {
  country: string;
  cityOrProvince: string;
  firstLineAddress: string;
  district: string;
  zipcode: string;
  countryCode?: string;
}

export interface IDate {
  createdAt: Date;
  updatedAt: Date;
}

export interface IGenericPaginate {
  total?: number;
  docs?: any;
  limit: number;
  currentPage: number;
  next: number;
  prev: number;
  totalPages: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
}

export interface IPaginationResponse {
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

export interface IGeneratePassword {
  uppercase: boolean;
  number: boolean;
  special: boolean;
  size: number;
}
