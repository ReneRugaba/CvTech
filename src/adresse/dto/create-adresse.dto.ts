import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class CreateAdresseDto {
  @IsNumber()
  @IsNotEmpty()
  numRue: number;

  @IsString()
  @Min(3)
  @IsNotEmpty()
  rue: string;

  @IsString()
  @IsNotEmpty()
  complement: string;

  @IsNumber()
  @IsNotEmpty()
  codePostal: number;

  @IsString()
  @Min(3)
  @IsNotEmpty()
  ville: string;
}
