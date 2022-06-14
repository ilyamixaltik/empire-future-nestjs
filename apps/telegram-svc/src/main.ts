import { NestFactory } from '@nestjs/core';
import { TelegramSvcModule } from './telegram-svc.module';

async function bootstrap() {
  const port = Number(process.env.TELEGRAM_SERVICE_PORT);
  const app = await NestFactory.create(TelegramSvcModule);

  await app.listen(port);
}
bootstrap();
