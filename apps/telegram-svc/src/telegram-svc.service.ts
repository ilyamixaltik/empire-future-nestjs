import { Injectable } from '@nestjs/common';
import { CoreService } from "@app/core";

@Injectable()
export class TelegramSvcService {
  constructor(private readonly coreService: CoreService) {}

  onInfoCommand(ctx) {
    return this.coreService.info(ctx);
  }
}
