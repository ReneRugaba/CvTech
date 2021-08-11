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

@Controller('adresse')
export class AdresseController {
  constructor(private readonly adresseService: AdresseService) {}

  @Post()
  create(@Body() createAdresseDto: CreateAdresseDto) {
    return this.adresseService.create(createAdresseDto);
  }

  @Get()
  findAll() {
    return this.adresseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adresseService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAdresseDto: UpdateAdresseDto) {
    return this.adresseService.update(+id, updateAdresseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.adresseService.remove(+id);
  }
}
