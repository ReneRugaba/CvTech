import { IsString } from 'class-validator';

export class CreateFormationDto {
  @IsString()
  nomDiplome: string;

  @IsString()
  dateObtention: string;
}
