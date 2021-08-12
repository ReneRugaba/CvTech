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
  @ApiCreatedResponse({ description: 'Record created' })
  @ApiConflictResponse({ description: 'Duplicated record' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  create(@Body() createAdresseDto: CreateAdresseDto) {
    return this.adresseService.create(createAdresseDto);
  }

  @Get()
  @ApiOkResponse({
    description: 'return all adresse',
    type: [AdresseEntity],
  })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  @ApiNotFoundResponse({ description: 'No records found' })
  findAll() {
    return this.adresseService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({
    description: 'return one adresse',
    type: AdresseEntity,
  })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  @ApiNotFoundResponse({ description: 'No record found' })
  findOne(@Param('id') id: string) {
    return this.adresseService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({
    description: 'Update one adresse',
  })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  update(@Param('id') id: string, @Body() updateAdresseDto: UpdateAdresseDto) {
    return this.adresseService.update(+id, updateAdresseDto);
  }

  @Delete(':id')
  @ApiOkResponse({
    description: 'Delete one adresse',
  })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  remove(@Param('id') id: string) {
    return this.adresseService.remove(+id);
  }
}
