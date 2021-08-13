import { Module } from '@nestjs/common';
import { CompetencesService } from './competences.service';
import { CompetencesController } from './competences.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompetencesEntity } from './entities/competence.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CompetencesEntity])],
  controllers: [CompetencesController],
  providers: [CompetencesService],
})
export class CompetencesModule {}
