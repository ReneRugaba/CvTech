import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
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

  async create(createAdresseDto: CreateAdresseDto): Promise<AdresseEntity> {
    const adresse = await this.adresseRepository.find({
      where: {
        numRue: createAdresseDto.numRue,
        rue: createAdresseDto.rue,
        complement: createAdresseDto.complement,
        codePostal: createAdresseDto.codePostal,
      },
    });
    if (adresse.length > 0) {
      throw new ConflictException();
    }

    const newAdresse = await this.adresseRepository.save(createAdresseDto);
    if (!newAdresse) {
      throw new InternalServerErrorException();
    }
    return newAdresse;
  }

  async findAll(): Promise<AdresseEntity[]> {
    const adresses = await this.adresseRepository.find();
    console.log(adresses);
    if (adresses.length <= 0) {
      throw new NotFoundException();
    }
    return adresses;
  }

  async findOne(id: number): Promise<AdresseEntity> {
    const adresse = await this.adresseRepository.findOne(id);
    if (!adresse) {
      throw new NotFoundException();
    }
    return adresse;
  }

  async update(id: number, updateAdresseDto: UpdateAdresseDto): Promise<any> {
    const affected = await this.adresseRepository.update(id, updateAdresseDto);
    if (affected.affected !== 1) {
      throw new InternalServerErrorException();
    }
    return affected;
  }

  async remove(id: number) {
    const affected = await this.adresseRepository.delete(id);
    if (affected.affected !== 1) {
      throw new InternalServerErrorException();
    }
    return affected;
  }
}
