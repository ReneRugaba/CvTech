import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PhotosModule } from './photos/photos.module';
import { AdresseModule } from './adresse/adresse.module';
import { CompetencesModule } from './competences/competences.module';
import { CvModule } from './cv/cv.module';
import { ExperiencesModule } from './experiences/experiences.module';
import { FormationsModule } from './formations/formations.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { connectDb } from './config/connectDb';

@Module({
  imports: [
    TypeOrmModule.forRoot(connectDb),
    ConfigModule.forRoot(),
    UserModule,
    PhotosModule,
    AdresseModule,
    CompetencesModule,
    CvModule,
    ExperiencesModule,
    FormationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
