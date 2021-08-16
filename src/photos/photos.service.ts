import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePhotoDto } from './dto/create-photo.dto';
import { UpdatePhotoDto } from './dto/update-photo.dto';
import { PhotosEntity } from './entities/photo.entity';

@Injectable()
export class PhotosService {
  constructor(
    @InjectRepository(PhotosEntity)
    private readonly phoptosRepository: Repository<PhotosEntity>,
  ) {}

  async create(createPhotoDto: CreatePhotoDto) {
    const photo = await this.phoptosRepository.save(createPhotoDto);
    return photo;
  }

  async findAll() {
    const photos = await this.phoptosRepository.find();
    if (photos.length <= 0) {
      throw new NotFoundException();
    }
    return photos;
  }

  async findOne(id: number) {
    const photo = await this.phoptosRepository.findOne(id);
    if (!photo) {
      throw new NotFoundException();
    }
    return photo;
  }

  async update(id: number, updatePhotoDto: UpdatePhotoDto) {
    const affected = await this.phoptosRepository.update(id, updatePhotoDto);
    if (affected.affected !== 1) {
      throw new InternalServerErrorException();
    }
    return affected;
  }

  async remove(id: number) {
    const affected = await this.phoptosRepository.delete(id);
    if (affected.affected !== 1) {
      throw new InternalServerErrorException();
    }
    return affected;
  }
}
