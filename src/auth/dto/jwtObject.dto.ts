import { IsString } from 'class-validator';

export class JwtDto {
  @IsString()
  access_token: string;
}
