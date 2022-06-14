import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CoreService } from '@app/core';
import { VkSvcController } from './vk-svc.controller';
import { VkSvcService } from './vk-svc.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: 'process.env',
    })
  ],
  controllers: [VkSvcController],
  providers: [VkSvcService, CoreService],
})
export class VkSvcModule {}
