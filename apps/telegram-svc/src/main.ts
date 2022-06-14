import { NestFactory } from '@nestjs/core';
import { TelegramSvcModule } from './telegram-svc.module';

async function bootstrap() {
  const app = await NestFactory.create(TelegramSvcModule);
  await app.listen(3000);
}
bootstrap();
