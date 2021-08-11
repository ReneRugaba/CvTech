import { PartialType } from '@nestjs/mapped-types';
import { CreateAdresseDto } from './create-adresse.dto';

export class UpdateAdresseDto extends PartialType(CreateAdresseDto) {}
