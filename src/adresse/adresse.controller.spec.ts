import { Test, TestingModule } from '@nestjs/testing';
import { AdresseController } from './adresse.controller';
import { AdresseService } from './adresse.service';

describe('AdresseController', () => {
  let controller: AdresseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdresseController],
      providers: [AdresseService],
    }).compile();

    controller = module.get<AdresseController>(AdresseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
