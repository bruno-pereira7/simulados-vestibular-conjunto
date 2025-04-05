import { Test } from "@nestjs/testing";
import { DatabaseModule } from "../../common/database/database.module";
import { RedacaoController } from "./redacao.controller";
import { RedacaoService } from "./redacao.service";

describe("Redacao Controller", () => {
  let redacaoController: RedacaoController;
  let redacaoService: RedacaoService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [RedacaoController],
      providers: [RedacaoService, DatabaseModule],
    }).compile();

    redacaoService = moduleRef.get<RedacaoService>(RedacaoService);
    redacaoController = moduleRef.get<RedacaoController>(RedacaoController);
  });

  describe("findAll", () => {
    it("teste generico", () => {
      expect(1).toBe(1);
    });
  });
});
