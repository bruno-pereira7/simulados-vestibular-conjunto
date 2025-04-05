import { Test } from "@nestjs/testing";
import { DatabaseModule } from "../../common/database/database.module";
import { SimuladoRedacaoController } from "./simulado-redacao.controller";
import { SimuladoRedacaoService } from "./simulado-redacao.service";

describe("Simulado Redacao Controller", () => {
  let simuladoRedacaoController: SimuladoRedacaoController;
  let simuladoRedacaoService: SimuladoRedacaoService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [SimuladoRedacaoController],
      providers: [SimuladoRedacaoService, DatabaseModule],
    }).compile();

    simuladoRedacaoService =
      moduleRef.get<SimuladoRedacaoService>(SimuladoRedacaoService);
    simuladoRedacaoController = moduleRef.get<SimuladoRedacaoController>(
      SimuladoRedacaoController,
    );
  });

  describe("findAll", () => {
    it("teste generico", () => {
      expect(1).toBe(1);
    });
  });
});
