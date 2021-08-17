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
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags('EXPERIENCES')
@Controller('experiences')
export class ExperiencesController {
  constructor(private readonly experiencesService: ExperiencesService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
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
  @UseGuards(JwtAuthGuard)
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
  @UseGuards(JwtAuthGuard)
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
  @UseGuards(JwtAuthGuard)
  update(
    @Param('id') id: string,
    @Body() updateExperienceDto: UpdateExperienceDto,
  ): Promise<any> {
    return this.experiencesService.update(+id, updateExperienceDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string): Promise<any> {
    return this.experiencesService.remove(+id);
  }
}
