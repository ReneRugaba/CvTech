import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { AdresseService } from './adresse.service';
import { CreateAdresseDto } from './dto/create-adresse.dto';
import { UpdateAdresseDto } from './dto/update-adresse.dto';
import { AdresseEntity } from './entities/adresse.entity';
import { genericResponse } from './../config/genericResponse';

import {
  ApiTags,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiConflictResponse,
  ApiOkResponse,
  ApiNotFoundResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags('ADRESSE')
@ApiBearerAuth()
@Controller('adresse')
export class AdresseController {
  constructor(private readonly adresseService: AdresseService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiCreatedResponse({ description: genericResponse.recordCreated.Response })
  @ApiConflictResponse({ description: genericResponse.conflicts.response })
  @ApiInternalServerErrorResponse({
    description: genericResponse.serverKo.response,
  })
  create(@Body() createAdresseDto: CreateAdresseDto) {
    return this.adresseService.create(createAdresseDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({
    description: genericResponse.ok.response,
    type: [AdresseEntity],
  })
  @ApiInternalServerErrorResponse({
    description: genericResponse.serverKo.response,
  })
  @ApiNotFoundResponse({ description: genericResponse.notFound.response })
  findAll() {
    return this.adresseService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({
    description: genericResponse.ok.response,
    type: AdresseEntity,
  })
  @ApiInternalServerErrorResponse({
    description: genericResponse.serverKo.response,
  })
  @ApiNotFoundResponse({ description: genericResponse.notFound.response })
  findOne(@Param('id') id: string) {
    return this.adresseService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({
    description: genericResponse.ok.response,
  })
  @ApiInternalServerErrorResponse({ description: genericResponse.ok.response })
  update(@Param('id') id: string, @Body() updateAdresseDto: UpdateAdresseDto) {
    return this.adresseService.update(+id, updateAdresseDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({
    description: genericResponse.ok.response,
  })
  @ApiInternalServerErrorResponse({
    description: genericResponse.serverKo.response,
  })
  remove(@Param('id') id: string) {
    return this.adresseService.remove(+id);
  }
}
