import { Test, TestingModule } from '@nestjs/testing';
import { Lib2Service } from './lib2.service';

describe('Lib2Service', () => {
  let service: Lib2Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Lib2Service],
    }).compile();

    service = module.get<Lib2Service>(Lib2Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
