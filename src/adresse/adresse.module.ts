import { Module } from '@nestjs/common';
import { AdresseService } from './adresse.service';
import { AdresseController } from './adresse.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdresseEntity } from './entities/adresse.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AdresseEntity])],
  controllers: [AdresseController],
  providers: [AdresseService],
})
export class AdresseModule {}
