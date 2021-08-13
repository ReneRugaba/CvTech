import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
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
} from '@nestjs/swagger';

@ApiTags('ADRESSE')
@Controller('adresse')
export class AdresseController {
  constructor(private readonly adresseService: AdresseService) {}

  @Post()
  @ApiCreatedResponse({ description: genericResponse.recordCreated.Response })
  @ApiConflictResponse({ description: genericResponse.conflicts.response })
  @ApiInternalServerErrorResponse({
    description: genericResponse.serverKo.response,
  })
  create(@Body() createAdresseDto: CreateAdresseDto) {
    return this.adresseService.create(createAdresseDto);
  }

  @Get()
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
  @ApiOkResponse({
    description: genericResponse.ok.response,
  })
  @ApiInternalServerErrorResponse({ description: genericResponse.ok.response })
  update(@Param('id') id: string, @Body() updateAdresseDto: UpdateAdresseDto) {
    return this.adresseService.update(+id, updateAdresseDto);
  }

  @Delete(':id')
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
