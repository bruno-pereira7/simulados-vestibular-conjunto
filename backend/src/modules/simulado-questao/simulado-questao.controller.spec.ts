import { Test } from "@nestjs/testing";
import { DatabaseModule } from "../../common/database/database.module";
import { SimuladoQuestaoController } from "./simulado-questao.controller";
import { SimuladoQuestaoService } from "./simulado-questao.service";

describe("Simulado Questao Controller", () => {
  let simuladoQuestaoController: SimuladoQuestaoController;
  let simuladoQuestaoService: SimuladoQuestaoService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [SimuladoQuestaoController],
      providers: [SimuladoQuestaoService, DatabaseModule],
    }).compile();

    simuladoQuestaoService =
      moduleRef.get<SimuladoQuestaoService>(SimuladoQuestaoService);
    simuladoQuestaoController = moduleRef.get<SimuladoQuestaoController>(
      SimuladoQuestaoController,
    );
  });

  describe("findAll", () => {
    it("teste generico", () => {
      expect(1).toBe(1);
    });
  });
});
