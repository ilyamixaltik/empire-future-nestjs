import { Injectable } from '@nestjs/common';
import { CoreService } from '@app/core';

@Injectable()
export class VkSvcService {
  constructor(private readonly coreService: CoreService) {}

  onInfoCommand(ctx) {
    return this.coreService.info(ctx);
  }
}
