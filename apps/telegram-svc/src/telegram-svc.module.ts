import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CoreService } from '@app/core';
import { TelegramModule } from 'nestjs-puregram';
import { TelegramSvcController } from './telegram-svc.controller';
import { TelegramSvcService } from './telegram-svc.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: 'process.env',
    }),
    TelegramModule.forRoot({
      token: process.env.TELEGRAM_BOT_TOKEN
    })
  ],
  controllers: [],
  providers: [
    CoreService,
    TelegramSvcService, TelegramSvcController
  ],
})
export class TelegramSvcModule {}
