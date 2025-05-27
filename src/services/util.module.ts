import { Module } from '@nestjs/common';
import { UtilService } from './util.service';
import { Logger } from 'winston';

@Module({
  providers: [UtilService, Logger],
  exports: [UtilService],
})
export class UtilModule {}
