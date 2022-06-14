import { Test, TestingModule } from '@nestjs/testing';
import { DiscordSvcController } from './discord-svc.controller';
import { DiscordSvcService } from './discord-svc.service';

describe('DiscordSvcController', () => {
  let discordSvcController: DiscordSvcController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [DiscordSvcController],
      providers: [DiscordSvcService],
    }).compile();

    discordSvcController = app.get<DiscordSvcController>(DiscordSvcController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(discordSvcController.getHello()).toBe('Hello World!');
    });
  });
});
