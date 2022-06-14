import { Test, TestingModule } from '@nestjs/testing';
import { TelegramSvcController } from './telegram-svc.controller';
import { TelegramSvcService } from './telegram-svc.service';

describe('TelegramSvcController', () => {
  let telegramSvcController: TelegramSvcController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TelegramSvcController],
      providers: [TelegramSvcService],
    }).compile();

    telegramSvcController = app.get<TelegramSvcController>(TelegramSvcController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(telegramSvcController.getHello()).toBe('Hello World!');
    });
  });
});
