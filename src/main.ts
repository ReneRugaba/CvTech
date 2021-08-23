import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as helmet from 'helmet';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { authApp } from './config/authApp';
import * as basicAuth from 'express-basic-auth';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ici on conditionne l'entrée sur la doc de l'Api
  app.use(
    ['/api', '/docs-json'],
    basicAuth({
      challenge: true,
      users: {
        [authApp.userName]: authApp.passWord,
      },
    }),
  );
  // creation de la doc de l'app
  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle(process.env.DOC_TITLE)
    .setDescription(process.env.DESCRIPTION_DOC)
    .setVersion(process.env.VERSION_DOC)
    .addTag(process.env.TAGS_DOC)
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // ici on protège l'Api de certaines attaques connues
  app.use(helmet());

  // ici on reglemente la serialisation des objets selon la request
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  // ici on peut choisir les domaines qui auront l'accès à l'Api
  app.enableCors({});

  // ici on donne un port et on log l'url de l'Api
  await app.listen(process.env.PORT_APP, async () =>
    console.log(
      `app start port-> ${process.env.PORT_APP} url-> ${await app.getUrl()}`,
    ),
  );
}

bootstrap();
