import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { portApp } from './config/portApp';
import * as helmet from 'helmet';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { authApp } from './config/authApp';
import * as basicAuth from 'express-basic-auth';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(
    ['/api', '/docs-json'],
    basicAuth({
      challenge: true,
      users: {
        [authApp.userName]: authApp.passWord,
      },
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('CV-TECH')
    .setDescription('Createur et organisateur de cv')
    .setVersion('1.0')
    .addTag('CvTech')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);
  app.use(helmet());
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  app.enableCors();
  await app.listen(portApp);
}

bootstrap();
