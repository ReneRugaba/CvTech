import { IsArray, IsString, Length } from 'class-validator';
import { CreateExperienceDto } from './../../experiences/dto/create-experience.dto';
import { CreateCompetenceDto } from './../../competences/dto/create-competence.dto';
import { CreateFormationDto } from './../../formations/dto/create-formation.dto';

export class CreateCvDto {
  @IsString()
  @Length(3, 50)
  cvName: string;

  @IsString()
  @Length(3, 50)
  description: string;

  @IsArray()
  experiences: CreateExperienceDto[] = [];

  @IsArray()
  competences: CreateCompetenceDto[] = [];

  @IsArray()
  formations: CreateFormationDto[] = [];
}
