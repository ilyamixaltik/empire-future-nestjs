import { Module } from '@nestjs/common';
import { DiscordSvcController } from './discord-svc.controller';
import { DiscordSvcService } from './discord-svc.service';

@Module({
  imports: [],
  controllers: [DiscordSvcController],
  providers: [DiscordSvcService],
})
export class DiscordSvcModule {}
