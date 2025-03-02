import { Test, TestingModule } from '@nestjs/testing';
import { UrlRepository } from './url.repository';

describe('UrlController', () => {
  let repository: UrlRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UrlRepository],
    }).compile();

    repository = module.get<UrlRepository>(UrlRepository);
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });
});
