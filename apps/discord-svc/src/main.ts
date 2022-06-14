import { NestFactory } from '@nestjs/core';
import { DiscordSvcModule } from './discord-svc.module';

async function bootstrap() {
  const app = await NestFactory.create(DiscordSvcModule);
  await app.listen(3000);
}
bootstrap();
