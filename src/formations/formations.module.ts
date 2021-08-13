import { Module } from '@nestjs/common';
import { FormationsService } from './formations.service';
import { FormationsController } from './formations.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FormationsEntity } from './entities/formation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FormationsEntity])],
  controllers: [FormationsController],
  providers: [FormationsService],
})
export class FormationsModule {}
