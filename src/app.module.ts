import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { PhotosModule } from './photos/photos.module';
import { AdresseModule } from './adresse/adresse.module';
import { CompetencesModule } from './competences/competences.module';
import { CvModule } from './cv/cv.module';
import { ExperiencesModule } from './experiences/experiences.module';
import { FormationsModule } from './formations/formations.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { connectDb } from './config/connectDb';
import { IndexModule } from './index/index.module';
import { AuthModule } from './auth/auth.module';
import { AppLoggerMiddleware } from './middleware/AppLoggerMiddleware ';

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
    IndexModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  configure(consummer: MiddlewareConsumer) {
    consummer.apply(AppLoggerMiddleware).forRoutes('*');
  }
}
