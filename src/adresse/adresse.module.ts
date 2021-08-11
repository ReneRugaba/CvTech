import { Module } from '@nestjs/common';
import { AdresseService } from './adresse.service';
import { AdresseController } from './adresse.controller';

@Module({
  controllers: [AdresseController],
  providers: [AdresseService],
})
export class AdresseModule {}
