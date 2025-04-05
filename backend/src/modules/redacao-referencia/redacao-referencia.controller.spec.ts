import { Test } from "@nestjs/testing";
import { DatabaseModule } from "../../common/database/database.module";
import { RedacaoReferenciaController } from "./redacao-referencia.controller";
import { RedacaoReferenciaService } from "./redacao-referencia.service";

describe("Redacao Referencia Controller", () => {
  let redacaoReferenciaController: RedacaoReferenciaController;
  let redacaoReferenciaService: RedacaoReferenciaService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [RedacaoReferenciaController],
      providers: [RedacaoReferenciaService, DatabaseModule],
    }).compile();

    redacaoReferenciaService = moduleRef.get<RedacaoReferenciaService>(
      RedacaoReferenciaService,
    );
    redacaoReferenciaController = moduleRef.get<RedacaoReferenciaController>(
      RedacaoReferenciaController,
    );
  });

  describe("findAll", () => {
    it("teste generico", () => {
      expect(1).toBe(1);
    });
  });
});
