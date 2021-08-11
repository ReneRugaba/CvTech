import { Injectable } from '@nestjs/common';
import { CreateAdresseDto } from './dto/create-adresse.dto';
import { UpdateAdresseDto } from './dto/update-adresse.dto';

@Injectable()
export class AdresseService {
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
