import { NestFactory } from '@nestjs/core';
import { VkSvcModule } from './vk-svc.module';

async function bootstrap() {
  const app = await NestFactory.create(VkSvcModule);
  await app.listen(3000);
}
bootstrap();
