import { Test, TestingModule } from '@nestjs/testing';
import { VkSvcController } from './vk-svc.controller';
import { VkSvcService } from './vk-svc.service';

describe('VkSvcController', () => {
  let vkSvcController: VkSvcController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [VkSvcController],
      providers: [VkSvcService],
    }).compile();

    vkSvcController = app.get<VkSvcController>(VkSvcController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(vkSvcController.getHello()).toBe('Hello World!');
    });
  });
});
