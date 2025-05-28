import { Module } from '@nestjs/common';
import { UtilService } from './util.service';
import { Logger } from 'winston';
import { HelperService } from './helper.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  providers: [UtilService, Logger, HelperService, ConfigService],
  exports: [UtilService],
})
export class UtilModule {}
