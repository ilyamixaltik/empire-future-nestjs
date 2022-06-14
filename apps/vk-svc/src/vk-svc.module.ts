import { Module } from '@nestjs/common';
import { VkSvcController } from './vk-svc.controller';
import { VkSvcService } from './vk-svc.service';

@Module({
  imports: [],
  controllers: [VkSvcController],
  providers: [VkSvcService],
})
export class VkSvcModule {}
