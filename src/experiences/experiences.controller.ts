import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ExperiencesService } from './experiences.service';
import { CreateExperienceDto } from './dto/create-experience.dto';
import { UpdateExperienceDto } from './dto/update-experience.dto';
import {
  ApiTags,
  ApiOkResponse,
  ApiNotFoundResponse,
  ApiInternalServerErrorResponse,
} from '@nestjs/swagger';
import { genericResponse } from './../config/genericResponse';
import { ExperiencesEntity } from './entities/experience.entity';

@ApiTags('EXPERIENCES')
@Controller('experiences')
export class ExperiencesController {
  constructor(private readonly experiencesService: ExperiencesService) {}

  @Post()
  @ApiOkResponse({
    description: genericResponse.ok.response,
    type: ExperiencesEntity,
  })
  create(
    @Body() createExperienceDto: CreateExperienceDto,
  ): Promise<ExperiencesEntity> {
    return this.experiencesService.create(createExperienceDto);
  }

  @Get()
  @ApiOkResponse({
    description: genericResponse.ok.response,
    type: [ExperiencesEntity],
  })
  @ApiNotFoundResponse({ description: genericResponse.notFound.response })
  @ApiInternalServerErrorResponse({
    description: genericResponse.serverKo.response,
  })
  findAll(): Promise<ExperiencesEntity[]> {
    return this.experiencesService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({
    description: genericResponse.ok.response,
    type: ExperiencesEntity,
  })
  @ApiNotFoundResponse({ description: genericResponse.notFound.response })
  @ApiInternalServerErrorResponse({
    description: genericResponse.serverKo.response,
  })
  findOne(@Param('id') id: string): Promise<ExperiencesEntity> {
    return this.experiencesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateExperienceDto: UpdateExperienceDto,
  ): Promise<any> {
    return this.experiencesService.update(+id, updateExperienceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<any> {
    return this.experiencesService.remove(+id);
  }
}
