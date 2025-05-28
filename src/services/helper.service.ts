import { Injectable, ForbiddenException, Inject } from '@nestjs/common';
import { TwilioService } from 'nestjs-twilio';
import { ConfigService } from '@nestjs/config';
import { Logger } from 'winston';
import * as crypto from 'crypto';
import axios, { AxiosHeaders, AxiosResponse } from 'axios';
import * as nanoid from 'nanoid';
import { TwilioOTP } from '../interfaces/helper.interface';

@Injectable()
export class HelperService {
  private name: string;

  constructor(
    @Inject('winston') private readonly logger: Logger,
    private readonly config: ConfigService,
    private readonly twilioService: TwilioService,
  ) {
    this.name = HelperService.name;
  }

  random6Digits(): string {
    this.logger.log(`Running ${this.name}.random6Digits`, this.name);
    const min = 100000;
    const max = 900000;
    const num = Math.floor(Math.random() * min) + max;
    return num.toString();
  }

  random8Digits = (): string => {
    this.logger.log(`Running ${this.name}.random6Digits`, this.name);
    const min = 1000000;
    const max = 9000000;
    const num = Math.floor(Math.random() * min) + max;
    return num.toString();
  };

  generateDeviceId(userId = 0): string {
    this.logger.log(`Running ${this.name}.generateInsuranceId`, this.name);
    let uniqueNumber = '';
    const IDlength = 8;

    while (uniqueNumber.length < IDlength - userId.toString().length) {
      const digit = Math.floor(Math.random() * 10);
      if (uniqueNumber.indexOf(digit.toString()) === -1) {
        uniqueNumber += digit.toString();
      }
    }
    return `${uniqueNumber}${userId}`;
  }

  generateAlphaNumericString(length: number): string {
    this.logger.log(
      `Running ${this.name}.generateAlphaNumericString`,
      this.name,
    );
    let result = '';
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$##&&***%%%%';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  generateSHA256Digest(token: string): string {
    return crypto.createHash('sha256').update(token).digest('hex');
  }

  async sendOTP(phone: string): Promise<TwilioOTP> {
    this.logger.log(`Running ${this.name}.sendOTP`, this.name);
    try {
      const { to, channel, status, valid } =
        await this.twilioService.client.verify.v2
          .services(this.config.get('MSG_SID'))
          .verifications.create({
            to: phone,
            channel: 'sms',
          });

      return { to, channel, status, valid };
    } catch (e: any) {
      console.log(e);
      throw new ForbiddenException(e.message);
    }
  }

  async verifyOTP(phone: string, code: string): Promise<TwilioOTP> {
    this.logger.log(`Running ${this.name}.verifyOTP`, this.name);
    try {
      const { to, channel, status, valid } =
        await this.twilioService.client.verify.v2
          .services(this.config.get('MSG_SID'))
          .verificationChecks.create({ to: phone, code });

      return { to, channel, status, valid };
    } catch (e: any) {
      throw new ForbiddenException(e.message);
    }
  }

  generateRandomPassword(): string {
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialCharacters = '!@#$%^&*()_+[]{}|;:,.<>?';

    const allCharacters =
      uppercaseLetters + lowercaseLetters + numbers + specialCharacters;

    let password = '';

    password +=
      uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)];
    password +=
      lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password +=
      specialCharacters[Math.floor(Math.random() * specialCharacters.length)];

    const finalLength = Math.floor(Math.random() * 5) + 8;

    for (let i = password.length; i < finalLength; i++) {
      password +=
        allCharacters[Math.floor(Math.random() * allCharacters.length)];
    }

    password = password
      .split('')
      .sort(() => Math.random() - 0.5)
      .join('');

    return password;
  }

  async passwordHash(plaintext: string): Promise<string> {
    this.logger.log(`Running ${this.name}.passwordHash`, this.name);
    return crypto.createHmac('sha256', plaintext).digest('hex');
  }

  activationExpiryTime(): Date {
    this.logger.log(`Running ${this.name}.activationExpiryTime`, this.name);
    const expiryTime = 1 * 24 * 60 * 60 * 1000; //1 day in millisecond;

    return new Date(Date.now() + expiryTime);
  }

  resetPasswordExpiryTime(): Date {
    this.logger.log(`Running ${this.name}.reseetPasswordExpiryTime`, this.name);
    const expiryTime = 2 * 60 * 60 * 1000; // 2 hours in milliseconds

    return new Date(Date.now() + expiryTime);
  }

  generateUrlFriendlyToken(size: number): string {
    this.logger.log(`Running ${this.name}.generateUrlFriendlyToken`, this.name);
    return nanoid.nanoid(size);
  }

  activationCodeExpired(time: Date): boolean {
    this.logger.log(`Running ${this.name}.activationCodeExpired`, this.name);
    return Date.now() > new Date(time).getTime();
  }

  async tokenMatch(hash: string, token: string): Promise<boolean> {
    this.logger.log(`Running ${this.name}.tokenMatch`, this.name);
    return (await this.passwordHash(token)) === hash;
  }

  async postRequest(
    url: string,
    data: object,
    headers: AxiosHeaders,
  ): Promise<AxiosResponse> {
    this.logger.log(`Running ${this.name}.postRequest`, this.name);
    return axios.post(url, data, {
      headers,
    });
  }

  async putRequest(
    url: string,
    data: object,
    headers: AxiosHeaders,
  ): Promise<AxiosResponse> {
    this.logger.log(`Running ${this.name}.putRequest`, this.name);
    return axios.put(url, data, {
      headers,
    });
  }

  async sendSMS(phoneNumber: string, message: string): Promise<void> {
    this.logger.log(`Running ${this.name}.sendSMS`, this.name);
    try {
      await this.twilioService.client.messages.create({
        body: message,
        to: phoneNumber,
        from: this.config.get('TWILIO_PHONE_NUMBER'),
      });
    } catch (error) {
      this.logger.error(`Error sending SMS: ${error.message}`, this.name);
      throw error;
    }
  }
}
