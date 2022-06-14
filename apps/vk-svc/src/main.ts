import { NestFactory } from '@nestjs/core';
import { VkSvcModule } from './vk-svc.module';

async function bootstrap() {
  const port = Number(process.env.TELEGRAM_SERVICE_PORT);
  const app = await NestFactory.create(VkSvcModule);

  await app.listen(port);
}
bootstrap();
