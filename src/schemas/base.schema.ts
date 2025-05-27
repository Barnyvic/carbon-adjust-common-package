import { plainToInstance } from 'class-transformer';
import { Prop, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IUserAddress } from '../interfaces/base.interface';

export function modelDump(typeClass: any, data: any): any {
  return plainToInstance(typeClass, data, {
    excludeExtraneousValues: true,
  });
}

export class BaseSchema extends Document {
  @Prop({ type: Number, required: false, unique: true })
  id: number;

  @Prop({ type: Date, default: Date.now })
  createdAt: Date;

  @Prop({ type: Date, default: Date.now })
  updatedAt: Date;
}

export class BaseSchemaWithoutId extends Document {
  @Prop({ type: Date, default: Date.now })
  createdAt: Date;

  @Prop({ type: Date, default: Date.now })
  updatedAt: Date;
}

export class MainAddressSchema extends Document {
  @Prop({
    type: {
      country: { type: String, required: true },
      cityOrProvince: { type: String, required: true },
      firstLineAddress: { type: String, required: true },
      district: { type: String, required: true },
      zipcode: { type: String, required: true },
    },
    required: false,
    validate: {
      validator: function (value: IUserAddress) {
        if (value) {
          return (
            value.country &&
            value.cityOrProvince &&
            value.district &&
            value.firstLineAddress &&
            value.zipcode
          );
        }
        return true;
      },
      message: 'Address attributes are required if address is provided.',
    },
  })
  address: IUserAddress;
}

export const MainUserMixin = <T extends { new (...args: any[]): Document }>(
  superclass: T,
) => {
  @Schema()
  class MainUserMixedSchema extends superclass {
    constructor(...args: any[]) {
      super(...args);
      this.address = args[0]?.address;
    }

    @Prop({ type: MainAddressSchema, required: false })
    address: MainAddressSchema;
  }

  return MainUserMixedSchema;
};

export const MainUserMixinWithoutID = <
  T extends { new (...args: any[]): Document },
>(
  superclass: T,
) => {
  @Schema()
  class MainUserMixedSchema extends superclass {
    constructor(...args: any[]) {
      super(...args);
      this.address = args[0]?.address;
    }

    @Prop({
      type: MainAddressSchema,
      required: false,
      default: {
        country: '',
        cityOrProvince: '',
        district: '',
        firstLineAddress: '',
        zipcode: '',
      },
    })
    address: MainAddressSchema;
  }

  return MainUserMixedSchema;
};

export const BaseModelMixinWithoutID = <
  T extends { new (...args: any[]): Document },
>(
  superclass: T,
) => {
  @Schema()
  class MainUserMixedSchema extends superclass {
    constructor(...args: any[]) {
      super(...args);
    }
  }

  return MainUserMixedSchema;
};
