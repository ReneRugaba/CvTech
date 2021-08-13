import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCompetenceDto } from './dto/create-competence.dto';
import { UpdateCompetenceDto } from './dto/update-competence.dto';
import { CompetencesEntity } from './entities/competence.entity';

@Injectable()
export class CompetencesService {
  constructor(
    @InjectRepository(CompetencesEntity)
    private competencesRepository: Repository<CompetencesEntity>,
  ) {}

  async create(
    createCompetenceDto: CreateCompetenceDto,
  ): Promise<CompetencesEntity> {
    const competence = await this.competencesRepository.save(
      createCompetenceDto,
    );
    if (!competence) {
      throw new InternalServerErrorException();
    }
    return competence;
  }

  async findAll(): Promise<CompetencesEntity[]> {
    const competences = await this.competencesRepository.find();
    if (competences.length <= 0) {
      throw new NotFoundException();
    }
    return competences;
  }

  async findOne(id: number): Promise<CompetencesEntity> {
    const competence = await this.competencesRepository.findOne(id);
    if (!competence) {
      throw new NotFoundException();
    }
    return competence;
  }

  async update(
    id: number,
    updateCompetenceDto: UpdateCompetenceDto,
  ): Promise<any> {
    const affected = await this.competencesRepository.update(
      id,
      updateCompetenceDto,
    );
    if (affected.affected !== 1) {
      throw new NotFoundException();
    }
    return affected;
  }

  async remove(id: number): Promise<any> {
    const affected = await this.competencesRepository.delete(id);
    if (affected.affected !== 1) {
      throw new NotFoundException();
    }
    return affected;
  }
}
