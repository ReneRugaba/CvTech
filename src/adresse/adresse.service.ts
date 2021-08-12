import { Injectable } from '@nestjs/common';
import { CreateAdresseDto } from './dto/create-adresse.dto';
import { UpdateAdresseDto } from './dto/update-adresse.dto';
import { Repository } from 'typeorm';
import { AdresseEntity } from './entities/adresse.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AdresseService {
  constructor(
    @InjectRepository(AdresseEntity)
    private readonly adresseRepository: Repository<AdresseEntity>,
  ) {}

  create(createAdresseDto: CreateAdresseDto) {
    return 'This action adds a new adresse';
  }

  findAll() {
    return `This action returns all adresse`;
  }

  findOne(id: number) {
    return `This action returns a #${id} adresse`;
  }

  update(id: number, updateAdresseDto: UpdateAdresseDto) {
    return `This action updates a #${id} adresse`;
  }

  remove(id: number) {
    return `This action removes a #${id} adresse`;
  }
}
