import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { portApp } from './config/portApp';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(portApp);
}
bootstrap();
