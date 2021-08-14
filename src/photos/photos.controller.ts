import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFiles,
  Res,
} from '@nestjs/common';
import { PhotosService } from './photos.service';
import { CreatePhotoDto } from './dto/create-photo.dto';
import { UpdatePhotoDto } from './dto/update-photo.dto';
import { ApiTags } from '@nestjs/swagger';
import { FilesInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';

@ApiTags('PHOTOS')
@Controller('photos')
export class PhotosController {
  constructor(private readonly photosService: PhotosService) {}

  @Get(':fileid')
  async sendFile(
    @Param('fileid') fileId: string,
    @Res() res: Response,
  ): Promise<any> {
    res.sendFile(fileId, { root: 'photo' });
  }

  @Post()
  @UseInterceptors(FilesInterceptor('photo'))
  create(@UploadedFiles() file: Express.Multer.File) {
    const photoDto = new CreatePhotoDto();
    photoDto.createAt = new Date();
    photoDto.fileName = file[0].filename;
    photoDto.pathFile = 'http://localhost:3000/photos/' + file[0].filename;
    return this.photosService.create(photoDto);
  }

  @Get()
  findAll() {
    return this.photosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.photosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePhotoDto: UpdatePhotoDto) {
    return this.photosService.update(+id, updatePhotoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.photosService.remove(+id);
  }
}
