import {
  Injectable,
  Inject,
  HttpStatus,
  InternalServerErrorException,
  BadRequestException,
} from '@nestjs/common';
import { Logger } from 'winston';
import {
  IGenericResponseModel,
  IGeneratePassword,
  IPaginationResponse,
} from '../interfaces/base.interface';
import { v4 as uuidv4 } from 'uuid';
import { IUser } from '../interfaces/user.interface';
import { AppRoles } from '../enums/roles.enum';
import * as moment from 'moment-timezone';

@Injectable()
export class UtilService {
  private name: string;

  constructor(@Inject('winston') private readonly logger: Logger) {
    this.name = UtilService.name;
  }

  buildApiResponse<T>(
    genericResponse: IGenericResponseModel,
  ): IGenericResponseModel<T> {
    this.logger.log(`Running ${this.name}.buildApiResponse`, this.name);

    if (!genericResponse.apiId) {
      genericResponse.apiId = uuidv4();
    }

    if (!genericResponse.error) {
      genericResponse.error = '';
    }

    if (!genericResponse.statusCode) {
      genericResponse.statusCode = !genericResponse.error
        ? HttpStatus.OK
        : HttpStatus.UNPROCESSABLE_ENTITY;
    }

    this.logger.log(
      `Generated response with status code`,
      genericResponse.statusCode,
    );
    return genericResponse;
  }

  catchErrorHandler(error: any) {
    this.logger.log(`Running ${this.name}.catchErrorHandler`, this.name);
    console.log('error', error);
    if (error?.response?.statusCode === 500 || error?.statusCode === 500) {
      throw new InternalServerErrorException(
        'An error occured. Please Try again',
      );
    }
    throw error;
  }

  toTitleCase(str: string): string {
    this.logger.log(`Running ${this.name}.buildApiResponse`, this.name);

    return str.replace(/\b\w/g, function (char: string) {
      return char.toUpperCase();
    });
  }

  convertToNormal(str: string): string {
    this.logger.log(`Running ${this.name}.buildApiResponse`, this.name);

    const words = str.split('_');
    const capitalizedWords = words.map(
      word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
    );
    return capitalizedWords.join(' ');
  }

  isAdmin(user: IUser): boolean {
    this.logger.log(`Running ${this.name}.isAdmin`, this.name);
    return user.roles.includes(AppRoles.ADMIN || AppRoles.STAFF_ADMIN);
  }

  isMerchant(user: IUser): boolean {
    this.logger.log(`Running ${this.name}.isMerchant`, this.name);
    return user.roles.includes(AppRoles.MERCHANT);
  }

  isHomeOccupant(user: IUser): boolean {
    this.logger.log(`Running ${this.name}.isHomeOccupant`, this.name);
    return user.roles.includes(AppRoles.HOME_OWNER);
  }

  isGrantMerchantOrMerchant(user: IUser): boolean {
    this.logger.log(
      `Running ${this.name}.isGrantMerchantOrMerchant`,
      this.name,
    );
    return (
      user.roles.includes(AppRoles.GRANT_MERCHANT) ||
      user.roles.includes(AppRoles.MERCHANT)
    );
  }

  isAggregatorMerchantOrMerchant(user: IUser): boolean {
    this.logger.log(
      `Running ${this.name}.isAggregatorMerchantOrMerchant`,
      this.name,
    );
    return (
      user.roles.includes(AppRoles.AGGREGATOR_MERCHANT) ||
      user.roles.includes(AppRoles.MERCHANT)
    );
  }

  isCorporateUser(user: IUser): boolean {
    this.logger.log(`Running ${this.name}.isCorporateUser`, this.name);
    return user.roles.includes(AppRoles.CORPORATE_USER_ADMIN);
  }

  isInternalMerchant(user: IUser): boolean {
    this.logger.log(`Running ${this.name}.isInternalMerchant`, this.name);
    return user.roles.includes(AppRoles.MERCHANT) && user.isInternalMerchant;
  }

  isReportMerchant(user: IUser): boolean {
    this.logger.log(`Running ${this.name}.isReportMerchant`, this.name);
    return user.roles.includes(AppRoles.REPORT_MERCHANT);
  }

  isSuperMerchant(user: IUser): boolean {
    this.logger.log(`Running ${this.name}.isReportMerchant`, this.name);
    return user.roles.includes(AppRoles.SUPER_MERCHANT);
  }

  isStaff(user: IUser): boolean {
    this.logger.log(`Running ${this.name}.isStaff`, this.name);
    return user.roles.includes(AppRoles.STAFF);
  }

  private getRadomChar = (text: string): string => {
    this.logger.log(`Running ${this.name}.getRadomChar`, this.name);
    return text[Math.floor(Math.random() * text.length)];
  };

  private shuffle = (arr: string): string[] => {
    this.logger.log(`Running ${this.name}.shuffle`, this.name);
    const currentArray = [...arr];
    for (let i = currentArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = currentArray[i];
      currentArray[i] = currentArray[j];
      currentArray[j] = temp;
    }
    return currentArray;
  };

  generatePassword = (
    config: IGeneratePassword = {
      number: true,
      uppercase: true,
      size: 15,
      special: true,
    },
  ) => {
    this.logger.log(`Running ${this.name}.generatePassword`, this.name);

    let result = '';
    let charToSkip = 1;
    const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
    const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const NUMBERS = '01234567890';
    const SPECIALS = '!@#$%^&*()_-+=[]{}|;:\'",<>?/\\';
    let alphabet = LOWERCASE;

    result = this.getRadomChar(LOWERCASE);

    if (config.uppercase) {
      alphabet += UPPERCASE;
      result += this.getRadomChar(UPPERCASE);
      charToSkip++;
    }

    if (config.number) {
      alphabet += NUMBERS;
      result += this.getRadomChar(NUMBERS);
      charToSkip++;
    }

    if (config.special) {
      alphabet += SPECIALS;
      result += this.getRadomChar(SPECIALS);
      charToSkip++;
    }

    for (let i = charToSkip; i < Number(config.size); i++) {
      result += this.getRadomChar(alphabet);
    }

    return this.shuffle(result).join('');
  };

  buildPaginationResponse(
    result: any,
    page: number | string,
    limit: number | string,
  ): IPaginationResponse {
    const totalRecords = result.metadata[0]?.total || 0;
    const totalPages = Math.ceil(totalRecords / Number(limit));
    const currentPage = Number(page);

    return {
      totalRecords,
      limit: Number(limit),
      totalPages,
      page: currentPage,
      pagingCounter: (currentPage - 1) * Number(limit) + 1,
      hasPrevPage: currentPage > 1,
      hasNextPage: currentPage < totalPages,
      prevPage: currentPage > 1 ? currentPage - 1 : null,
      nextPage: currentPage < totalPages ? currentPage + 1 : null,
    };
  }

  getTimeDifference(
    startDateInput: Date | string,
    endDateInput: Date | string,
  ) {
    const startDate = moment(startDateInput);
    const endDate = moment(endDateInput);

    if (!startDate.isValid()) {
      throw new BadRequestException('Invalid start date');
    }

    if (!endDate.isValid()) {
      throw new BadRequestException('Invalid end date');
    }

    if (endDate.isBefore(startDate)) {
      throw new BadRequestException('End date must be after start date');
    }

    const diffInMs = endDate.diff(startDate);
    const diffDuration = moment.duration(diffInMs);

    const diffInSeconds = Math.floor(diffDuration.asSeconds());
    const diffInMinutes = Math.floor(diffDuration.asMinutes());
    const diffInHours = Math.floor(diffDuration.asHours());
    const diffInDays = Math.floor(diffDuration.asDays());

    const remainingHours = diffDuration.hours();
    const remainingMinutes = diffDuration.minutes();
    const remainingSeconds = diffDuration.seconds();
    const remainingMs = diffDuration.milliseconds();

    const parts: string[] = [];
    if (diffInDays > 0)
      parts.push(`${diffInDays} day${diffInDays !== 1 ? 's' : ''}`);
    if (remainingHours > 0)
      parts.push(`${remainingHours} hour${remainingHours !== 1 ? 's' : ''}`);
    if (remainingMinutes > 0)
      parts.push(
        `${remainingMinutes} minute${remainingMinutes !== 1 ? 's' : ''}`,
      );
    if (remainingSeconds > 0)
      parts.push(
        `${remainingSeconds} second${remainingSeconds !== 1 ? 's' : ''}`,
      );
    if (remainingMs > 0)
      parts.push(`${remainingMs} millisecond${remainingMs !== 1 ? 's' : ''}`);

    const humanReadable = parts.join(' ') || '0 milliseconds';

    return {
      milliseconds: diffInMs,
      seconds: diffInSeconds,
      minutes: diffInMinutes,
      hours: diffInHours,
      days: diffInDays,
      humanReadable,
    };
  }
}
