import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCvDto } from './dto/create-cv.dto';
import { UpdateCvDto } from './dto/update-cv.dto';
import { CvEntity } from './entities/cv.entity';

@Injectable()
export class CvService {
  constructor(
    @InjectRepository(CvEntity)
    private cvRepository: Repository<CvEntity>,
  ) {}
  async create(createCvDto: CreateCvDto) {
    const cv = this.cvRepository.save(createCvDto);
    if (!cv) {
      throw new InternalServerErrorException();
    }
    return cv;
  }

  async findAll() {
    const cvs = await this.cvRepository.find();
    console.log(cvs);
    if (cvs.length <= 0) {
      throw new NotFoundException();
    }

    return cvs;
  }

  async findOne(id: number): Promise<CvEntity> {
    const cv = await this.cvRepository.findOne(id);
    if (!cv) {
      throw new NotFoundException();
    }
    return cv;
  }

  async update(id: number, updateCvDto: UpdateCvDto) {
    const effect = await this.cvRepository.update(id, updateCvDto);
    if (effect.affected !== 1) {
      throw new InternalServerErrorException();
    }
    return effect;
  }

  async remove(id: number) {
    const effect = await this.cvRepository.delete(id);
    if (effect.affected !== 1) {
      throw new InternalServerErrorException();
    }
    return effect;
  }
}
