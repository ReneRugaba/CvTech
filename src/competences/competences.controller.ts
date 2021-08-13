import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CompetencesService } from './competences.service';
import { CreateCompetenceDto } from './dto/create-competence.dto';
import { UpdateCompetenceDto } from './dto/update-competence.dto';
import {
  ApiTags,
  ApiOkResponse,
  ApiInternalServerErrorResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
} from '@nestjs/swagger';
import { genericResponse } from './../config/genericResponse';
import { CompetencesEntity } from './entities/competence.entity';

@ApiTags('COMPETENCES')
@Controller('competences')
export class CompetencesController {
  constructor(private readonly competencesService: CompetencesService) {}

  @Post()
  @ApiCreatedResponse({
    description: genericResponse.ok.response,
    type: CompetencesEntity,
  })
  @ApiInternalServerErrorResponse({
    description: genericResponse.serverKo.response,
  })
  create(
    @Body() createCompetenceDto: CreateCompetenceDto,
  ): Promise<CompetencesEntity> {
    return this.competencesService.create(createCompetenceDto);
  }

  @Get()
  @ApiOkResponse({
    description: genericResponse.ok.response,
    type: [CompetencesEntity],
  })
  @ApiNotFoundResponse({ description: genericResponse.notFound.response })
  @ApiInternalServerErrorResponse({
    description: genericResponse.serverKo.response,
  })
  findAll(): Promise<CompetencesEntity[]> {
    return this.competencesService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({
    description: genericResponse.ok.response,
    type: CompetencesEntity,
  })
  @ApiNotFoundResponse({ description: genericResponse.notFound.response })
  @ApiInternalServerErrorResponse({
    description: genericResponse.serverKo.response,
  })
  findOne(@Param('id') id: string): Promise<CompetencesEntity> {
    return this.competencesService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({
    description: genericResponse.ok.response,
  })
  @ApiNotFoundResponse({ description: genericResponse.notFound.response })
  @ApiInternalServerErrorResponse({
    description: genericResponse.serverKo.response,
  })
  update(
    @Param('id') id: string,
    @Body() updateCompetenceDto: UpdateCompetenceDto,
  ) {
    return this.competencesService.update(+id, updateCompetenceDto);
  }

  @Delete(':id')
  @ApiOkResponse({
    description: genericResponse.ok.response,
  })
  @ApiNotFoundResponse({ description: genericResponse.notFound.response })
  @ApiInternalServerErrorResponse({
    description: genericResponse.serverKo.response,
  })
  remove(@Param('id') id: string) {
    return this.competencesService.remove(+id);
  }
}
