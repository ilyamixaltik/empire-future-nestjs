import { Injectable } from '@nestjs/common';

@Injectable()
export class DiscordSvcService {
  getHello(): string {
    return 'Hello World!';
  }
}
