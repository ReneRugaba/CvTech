import { Module } from '@nestjs/common';
import { FormationsService } from './formations.service';
import { FormationsController } from './formations.controller';

@Module({
  controllers: [FormationsController],
  providers: [FormationsService],
})
export class FormationsModule {}
