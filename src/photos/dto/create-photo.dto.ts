import { IsString } from 'class-validator';
export class CreatePhotoDto {
  @IsString()
  fileName: string;

  @IsString()
  pathFile: string;

  @IsString()
  createAt: Date;
}
