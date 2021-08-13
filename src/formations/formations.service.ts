import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFormationDto } from './dto/create-formation.dto';
import { UpdateFormationDto } from './dto/update-formation.dto';
import { FormationsEntity } from './entities/formation.entity';

@Injectable()
export class FormationsService {
  constructor(
    @InjectRepository(FormationsEntity)
    private formationRepository: Repository<FormationsEntity>,
  ) {}

  async create(
    createFormationDto: CreateFormationDto,
  ): Promise<FormationsEntity> {
    const formation = await this.formationRepository.save(createFormationDto);
    if (!formation) {
      throw new InternalServerErrorException();
    }
    return formation;
  }

  async findAll(): Promise<FormationsEntity[]> {
    const formations = await this.formationRepository.find();
    if (formations.length <= 0) {
      throw new NotFoundException();
    }
    return formations;
  }

  async findOne(id: number): Promise<FormationsEntity> {
    const formation = await this.formationRepository.findOne(id);
    if (!formation) {
      throw new NotFoundException();
    }
    return formation;
  }

  async update(id: number, updateFormationDto: UpdateFormationDto) {
    const affected = await this.formationRepository.update(
      id,
      updateFormationDto,
    );
    if (affected.affected !== 1) {
      throw new InternalServerErrorException();
    }
    return affected;
  }

  async remove(id: number) {
    const affected = await this.formationRepository.delete(id);
    if (affected.affected !== 1) {
      throw new InternalServerErrorException();
    }
    return affected;
  }
}
