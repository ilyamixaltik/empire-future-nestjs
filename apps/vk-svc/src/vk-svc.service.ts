import { Injectable } from '@nestjs/common';

@Injectable()
export class VkSvcService {
  getHello(): string {
    return 'Hello World!';
  }
}
