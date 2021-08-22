import { Controller, Post, UseGuards, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuth } from './locat-auth.guard';
import { LoginDto } from './dto/login.dto';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { genericResponse } from 'src/config/genericResponse';
import { JwtDto } from './dto/jwtObject.dto';

@Controller('auth')
@ApiTags('AUTHENTIFICATION')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuth)
  @Post('login')
  @ApiCreatedResponse({
    description: genericResponse.recordCreated.Response,
    type: JwtDto,
  })
  async login(@Body() user: LoginDto) {
    return this.authService.login(user);
  }
}
