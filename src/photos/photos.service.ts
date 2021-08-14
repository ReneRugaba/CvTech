import { Injectable } from '@nestjs/common';
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

  findAll() {
    return `This action returns all photos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} photo`;
  }

  update(id: number, updatePhotoDto: UpdatePhotoDto) {
    return `This action updates a #${id} photo`;
  }

  remove(id: number) {
    return `This action removes a #${id} photo`;
  }
}
