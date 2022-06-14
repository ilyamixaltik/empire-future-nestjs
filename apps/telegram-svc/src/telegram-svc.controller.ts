import { Hears, Update } from 'nestjs-puregram';
import { MessageContext } from 'puregram';
import { TelegramSvcService } from './telegram-svc.service';

@Update()
export class TelegramSvcController {
  constructor(private readonly telegramSvcService: TelegramSvcService) {}

  @Hears(/^\/?(info|инфо)$/i)
  onInfoCommand(ctx: MessageContext): string {
    return this.telegramSvcService.onInfoCommand(ctx);
  }
}
