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
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';

@Module({
  imports: [
    TypeOrmModule.forRoot(connectDb),
    ConfigModule.forRoot({ isGlobal: true }),
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 15,
    }),
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
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {
  configure(consummer: MiddlewareConsumer) {
    consummer.apply(AppLoggerMiddleware).forRoutes('*');
  }
}
