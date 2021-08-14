import { Module } from '@nestjs/common';
import { PhotosService } from './photos.service';
import { PhotosController } from './photos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotosEntity } from './entities/photo.entity';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { editFileName } from './editFileName';
import { filterFile } from './filterFile';

@Module({
  imports: [
    TypeOrmModule.forFeature([PhotosEntity]),
    MulterModule.register({
      storage: diskStorage({
        destination: './photo',
        filename: editFileName,
      }),
      fileFilter: filterFile,
    }),
  ],
  controllers: [PhotosController],
  providers: [PhotosService],
})
export class PhotosModule {}
