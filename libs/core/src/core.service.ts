import { Injectable } from '@nestjs/common';
import { InfoCommand } from './commands';

@Injectable()
export class CoreService {
  public info;

  constructor() {
    this.info = InfoCommand;
  }
}
