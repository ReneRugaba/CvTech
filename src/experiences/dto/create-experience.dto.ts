import { IsString } from 'class-validator';

export class CreateExperienceDto {
  @IsString()
  dateDebut: string;

  @IsString()
  dateFin: string;

  @IsString()
  entreprise: string;

  @IsString()
  nomPoste: string;
}
