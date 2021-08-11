import { Test, TestingModule } from '@nestjs/testing';
import { AdresseService } from './adresse.service';

describe('AdresseService', () => {
  let service: AdresseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdresseService],
    }).compile();

    service = module.get<AdresseService>(AdresseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
