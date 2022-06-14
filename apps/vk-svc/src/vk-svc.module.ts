import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CoreService } from '@app/core';
import { VkModule } from 'nestjs-vk';
import { VkSvcController } from './vk-svc.controller';
import { VkSvcService } from './vk-svc.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: 'process.env',
    }),
    VkModule.forRoot({
      token: process.env.VK_BOT_TOKEN,
      options: {
        pollingGroupId: +process.env.VK_BOT_GROUP_ID,
        apiMode: 'sequential',
      },
    })
  ],
  controllers: [],
  providers: [VkSvcService, VkSvcController, CoreService],
})
export class VkSvcModule {}
