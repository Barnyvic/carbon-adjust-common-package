import mongoose, { Document } from 'mongoose';

export interface ICountry extends Document {
  name: string;
  code: string;
  currency: string;
  countryCode: string;
  creator: mongoose.Schema.Types.ObjectId;
}

export interface ICreateCountryDto {
  name: ICountry['name'];
  code: string;
  countryCode: string;
  currency: ICountry['currency'];
}

export interface ISwitchCountryDto {
  country: ICountry['name'];
}

export interface IUpdateCountryDto {
  name?: ICountry['name'];
  code?: string;
  countryCode?: string;
  currency?: ICountry['currency'];
}
