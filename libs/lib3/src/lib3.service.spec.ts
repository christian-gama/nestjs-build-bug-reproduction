import { Test, TestingModule } from '@nestjs/testing';
import { Lib3Service } from './lib3.service';

describe('Lib3Service', () => {
  let service: Lib3Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Lib3Service],
    }).compile();

    service = module.get<Lib3Service>(Lib3Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
