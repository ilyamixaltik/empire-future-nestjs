import { Controller, Get } from '@nestjs/common';
import { TelegramSvcService } from './telegram-svc.service';

@Controller()
export class TelegramSvcController {
  constructor(private readonly telegramSvcService: TelegramSvcService) {}

  @Get()
  getHello(): string {
    return this.telegramSvcService.getHello();
  }
}
