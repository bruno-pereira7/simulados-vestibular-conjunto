import { Test } from "@nestjs/testing";
import { DatabaseModule } from "../../common/database/database.module";
import { SimuladoQuestaoService } from "./simulado-questao.service";

describe("Simulado Questao Service", () => {
  let simuladoQuestaoService: SimuladoQuestaoService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [SimuladoQuestaoService],
      imports: [DatabaseModule],
    }).compile();

    simuladoQuestaoService =
      moduleRef.get<SimuladoQuestaoService>(SimuladoQuestaoService);
  });

  describe("findAll", () => {
    it("teste generico", () => {
      expect(1).toBe(1);
    });
  });
});
