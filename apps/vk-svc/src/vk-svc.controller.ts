import { Ctx, Hears } from 'nestjs-vk';
import { MessageContext } from 'vk-io';
import { Controller } from '@nestjs/common';
import { VkSvcService } from './vk-svc.service';

@Controller()
export class VkSvcController {
  constructor(private readonly vkSvcService: VkSvcService) {}

  @Hears(/^\/?(info|инфо)$/i)
  async onInfoCommand(@Ctx() ctx: MessageContext) {
    const data = this.vkSvcService.onInfoCommand(ctx);

    return ctx.reply(data);
  }
}
