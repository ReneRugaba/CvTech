import { NotFoundException } from '@nestjs/common';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateExperienceDto } from './dto/create-experience.dto';
import { UpdateExperienceDto } from './dto/update-experience.dto';
import { ExperiencesEntity } from './entities/experience.entity';

@Injectable()
export class ExperiencesService {
  constructor(
    @InjectRepository(ExperiencesEntity)
    private experienceRepository: Repository<ExperiencesEntity>,
  ) {}
  async create(
    createExperienceDto: CreateExperienceDto,
  ): Promise<ExperiencesEntity> {
    const experience = await this.experienceRepository.save(
      createExperienceDto,
    );
    if (!experience) {
      throw new InternalServerErrorException();
    }
    return experience;
  }

  async findAll(): Promise<ExperiencesEntity[]> {
    const experiences = await this.experienceRepository.find();
    if (experiences.length <= 0) {
      throw new NotFoundException();
    }
    return experiences;
  }

  async findOne(id: number): Promise<ExperiencesEntity> {
    const experience = await this.experienceRepository.findOne(id);
    if (!experience) {
      throw new NotFoundException();
    }
    return experience;
  }

  async update(
    id: number,
    updateExperienceDto: UpdateExperienceDto,
  ): Promise<any> {
    const effected = await this.experienceRepository.update(
      id,
      updateExperienceDto,
    );
    if (effected.affected !== 1) {
      throw new InternalServerErrorException();
    }
    return effected;
  }

  async remove(id: number): Promise<any> {
    const effected = await this.experienceRepository.delete(id);
    if (effected.affected !== 1) {
      throw new InternalServerErrorException();
    }
    return effected;
  }
}
