import { Test, TestingModule } from '@nestjs/testing';
import { FormationsService } from './formations.service';

describe('FormationsService', () => {
  let service: FormationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FormationsService],
    }).compile();

    service = module.get<FormationsService>(FormationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
