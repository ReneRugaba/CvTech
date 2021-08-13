import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CvService } from './cv.service';
import { CreateCvDto } from './dto/create-cv.dto';
import { UpdateCvDto } from './dto/update-cv.dto';
import {
  ApiTags,
  ApiOkResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
} from '@nestjs/swagger';
import { genericResponse } from './../config/genericResponse';
import { CvEntity } from './entities/cv.entity';

@ApiTags('CV')
@Controller('cv')
export class CvController {
  constructor(private readonly cvService: CvService) {}

  @Post()
  @ApiOkResponse({ description: genericResponse.ok.response })
  @ApiInternalServerErrorResponse({
    description: genericResponse.serverKo.response,
  })
  create(@Body() createCvDto: CreateCvDto): Promise<CvEntity> {
    return this.cvService.create(createCvDto);
  }

  @Get()
  @ApiOkResponse({ description: genericResponse.ok.response, type: [CvEntity] })
  @ApiNotFoundResponse({ description: genericResponse.notFound.response })
  @ApiInternalServerErrorResponse({
    description: genericResponse.serverKo.response,
  })
  findAll(): Promise<CvEntity[]> {
    return this.cvService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ description: genericResponse.ok.response, type: CvEntity })
  @ApiNotFoundResponse({ description: genericResponse.notFound.response })
  @ApiInternalServerErrorResponse({
    description: genericResponse.serverKo.response,
  })
  findOne(@Param('id') id: string): Promise<CvEntity> {
    return this.cvService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ description: genericResponse.ok.response })
  @ApiNotFoundResponse({ description: genericResponse.notFound.response })
  @ApiInternalServerErrorResponse({
    description: genericResponse.serverKo.response,
  })
  @ApiOkResponse({
    description: genericResponse.ok.response,
  })
  update(@Param('id') id: string, @Body() updateCvDto: UpdateCvDto) {
    return this.cvService.update(+id, updateCvDto);
  }

  @Delete(':id')
  @ApiOkResponse({ description: genericResponse.ok.response })
  @ApiNotFoundResponse({ description: genericResponse.notFound.response })
  @ApiInternalServerErrorResponse({
    description: genericResponse.serverKo.response,
  })
  remove(@Param('id') id: string) {
    return this.cvService.remove(+id);
  }
}
