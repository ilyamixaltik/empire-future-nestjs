import { Module } from '@nestjs/common';
import { TelegramSvcController } from './telegram-svc.controller';
import { TelegramSvcService } from './telegram-svc.service';

@Module({
  imports: [],
  controllers: [TelegramSvcController],
  providers: [TelegramSvcService],
})
export class TelegramSvcModule {}
