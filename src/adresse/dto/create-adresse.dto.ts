import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateAdresseDto {
  @IsNumber()
  @IsNotEmpty()
  numRue: number;

  @IsString()
  @IsNotEmpty()
  rue: string;

  @IsString()
  @IsNotEmpty()
  complement: string;

  @IsNumber()
  @IsNotEmpty()
  codePostal: number;

  @IsString()
  @IsNotEmpty()
  ville: string;
}
