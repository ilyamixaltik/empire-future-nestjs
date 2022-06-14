import { Update, Ctx, Hears } from 'nestjs-vk';
import { MessageContext } from 'vk-io';
import { VkSvcService } from './vk-svc.service';

@Update()
export class VkSvcController {
  constructor(private readonly vkSvcService: VkSvcService) {}

  @Hears(/^\/?(info|инфо)$/i)
  async onInfoCommand(@Ctx() ctx: MessageContext) {
    const data = this.vkSvcService.onInfoCommand(ctx);

    return ctx.reply(data);
  }
}
