import { Test } from "@nestjs/testing";
import { DatabaseModule } from "../../common/database/database.module";
import { RedacaoService } from "./redacao.service";

describe("Redacao Service", () => {
  let redacaoService: RedacaoService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [RedacaoService],
      imports: [DatabaseModule],
    }).compile();

    redacaoService = moduleRef.get<RedacaoService>(RedacaoService);
  });

  describe("findAll", () => {
    it("teste generico", () => {
      expect(1).toBe(1);
    });
  });
});
