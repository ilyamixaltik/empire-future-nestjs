import { Controller, Get } from '@nestjs/common';
import { DiscordSvcService } from './discord-svc.service';

@Controller()
export class DiscordSvcController {
  constructor(private readonly discordSvcService: DiscordSvcService) {}

  @Get()
  getHello(): string {
    return this.discordSvcService.getHello();
  }
}
