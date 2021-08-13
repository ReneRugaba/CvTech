import { IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCvDto {
  @ApiProperty()
  @IsString()
  @Length(3, 50)
  cvName: string;

  @IsString()
  @Length(3, 50)
  description: string;
}
