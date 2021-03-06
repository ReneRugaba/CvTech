import {
  Controller,
  Get,
  Post,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFiles,
  Res,
  UseGuards,
} from '@nestjs/common';
import { PhotosService } from './photos.service';
import { CreatePhotoDto } from './dto/create-photo.dto';
import {
  ApiBearerAuth,
  ApiConsumes,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Response } from 'express';
import { genericResponse } from './../config/genericResponse';
import { ApiFile } from './ApiFile';
import { PhotosEntity } from './entities/photo.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { FilesInterceptor } from '@nestjs/platform-express';

@ApiTags('PHOTOS')
@ApiBearerAuth()
@Controller('photos')
export class PhotosController {
  constructor(private readonly photosService: PhotosService) {}

  @Get('upload/:filePath')
  async sendFile(
    @Param('filePath') fileId: string,
    @Res() res: Response,
  ): Promise<any> {
    res.sendFile(fileId, { root: 'photo' });
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ description: genericResponse.ok.response })
  @ApiInternalServerErrorResponse({
    description: genericResponse.serverKo.response,
  })
  @ApiConsumes('multipart/form-data')
  @ApiFile('photo')
  @UseInterceptors(FilesInterceptor('photo'))
  create(@UploadedFiles() file: Express.Multer.File) {
    const photoDto = new CreatePhotoDto();
    console.log(file);
    photoDto.createAt = new Date();
    photoDto.fileName = file[0].filename;
    photoDto.pathFile =
      'http://localhost:3000/photos/upload/' + file[0].filename;
    return this.photosService.create(photoDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({
    description: genericResponse.ok.response,
    type: [PhotosEntity],
  })
  @ApiNotFoundResponse({ description: genericResponse.notFound.response })
  @ApiInternalServerErrorResponse({
    description: genericResponse.serverKo.response,
  })
  findAll() {
    return this.photosService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({
    description: genericResponse.ok.response,
    type: PhotosEntity,
  })
  @ApiNotFoundResponse({ description: genericResponse.notFound.response })
  @ApiInternalServerErrorResponse({
    description: genericResponse.serverKo.response,
  })
  findOne(@Param('id') id: string) {
    return this.photosService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ description: genericResponse.ok.response })
  @ApiInternalServerErrorResponse({
    description: genericResponse.serverKo.response,
  })
  @ApiConsumes('multipart/form-data')
  @ApiFile('photo')
  @UseInterceptors(FilesInterceptor('photo'))
  update(@Param('id') id: string, @UploadedFiles() file: Express.Multer.File) {
    const photoUdateDto = new CreatePhotoDto();
    photoUdateDto.createAt = new Date();
    photoUdateDto.fileName = file[0].filename;
    photoUdateDto.pathFile = 'http://localhost:3000/photos/' + file[0].filename;
    return this.photosService.update(+id, photoUdateDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ description: genericResponse.ok.response })
  @ApiNotFoundResponse({ description: genericResponse.notFound.response })
  @ApiInternalServerErrorResponse({
    description: genericResponse.serverKo.response,
  })
  remove(@Param('id') id: string) {
    return this.photosService.remove(+id);
  }
}
