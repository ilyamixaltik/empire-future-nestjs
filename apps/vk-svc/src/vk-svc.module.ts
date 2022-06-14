import { Module } from '@nestjs/common';
import { CoreService } from '@app/core';
import { VkSvcController } from './vk-svc.controller';
import { VkSvcService } from './vk-svc.service';

@Module({
  imports: [],
  controllers: [VkSvcController],
  providers: [VkSvcService, CoreService],
})
export class VkSvcModule {}
