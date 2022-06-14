import { Controller, Get } from '@nestjs/common';
import { VkSvcService } from './vk-svc.service';

@Controller()
export class VkSvcController {
  constructor(private readonly vkSvcService: VkSvcService) {}

  @Get()
  getHello(): string {
    return this.vkSvcService.getHello();
  }
}
