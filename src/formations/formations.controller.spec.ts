import { Test, TestingModule } from '@nestjs/testing';
import { FormationsController } from './formations.controller';
import { FormationsService } from './formations.service';

describe('FormationsController', () => {
  let controller: FormationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FormationsController],
      providers: [FormationsService],
    }).compile();

    controller = module.get<FormationsController>(FormationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
