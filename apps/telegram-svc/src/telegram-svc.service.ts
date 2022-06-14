import { Injectable } from '@nestjs/common';

@Injectable()
export class TelegramSvcService {
  getHello(): string {
    return 'Hello World!';
  }
}
