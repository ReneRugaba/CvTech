import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FormationsService } from './formations.service';
import { CreateFormationDto } from './dto/create-formation.dto';
import { UpdateFormationDto } from './dto/update-formation.dto';
import {
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { genericResponse } from './../config/genericResponse';
import { FormationsEntity } from './entities/formation.entity';

@ApiTags('FORMATIONS')
@Controller('formations')
export class FormationsController {
  constructor(private readonly formationsService: FormationsService) {}

  @Post()
  @ApiCreatedResponse({
    description: genericResponse.recordCreated.Response,
    type: FormationsEntity,
  })
  @ApiInternalServerErrorResponse({
    description: genericResponse.serverKo.response,
  })
  create(@Body() createFormationDto: CreateFormationDto) {
    return this.formationsService.create(createFormationDto);
  }

  @Get()
  @ApiOkResponse({
    description: genericResponse.ok.response,
    type: [FormationsEntity],
  })
  @ApiNotFoundResponse({ description: genericResponse.notFound.response })
  @ApiInternalServerErrorResponse({
    description: genericResponse.serverKo.response,
  })
  findAll() {
    return this.formationsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({
    description: genericResponse.ok.response,
    type: FormationsEntity,
  })
  @ApiNotFoundResponse({ description: genericResponse.notFound.response })
  @ApiInternalServerErrorResponse({
    description: genericResponse.serverKo.response,
  })
  findOne(@Param('id') id: string): Promise<FormationsEntity> {
    return this.formationsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ description: genericResponse.ok.response })
  @ApiNotFoundResponse({ description: genericResponse.notFound.response })
  @ApiInternalServerErrorResponse({
    description: genericResponse.serverKo.response,
  })
  update(
    @Param('id') id: string,
    @Body() updateFormationDto: UpdateFormationDto,
  ) {
    return this.formationsService.update(+id, updateFormationDto);
  }

  @Delete(':id')
  @ApiOkResponse({ description: genericResponse.ok.response })
  @ApiNotFoundResponse({ description: genericResponse.notFound.response })
  @ApiInternalServerErrorResponse({
    description: genericResponse.serverKo.response,
  })
  remove(@Param('id') id: string) {
    return this.formationsService.remove(+id);
  }
}
