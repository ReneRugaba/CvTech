import { IsString, Length } from 'class-validator';
export class CreateCompetenceDto {
  @IsString()
  @Length(3, 50)
  nom: string;
}
