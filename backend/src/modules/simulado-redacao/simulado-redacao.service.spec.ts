import { Test } from "@nestjs/testing";
import { DatabaseModule } from "../../common/database/database.module";
import { SimuladoRedacaoService } from "./simulado-redacao.service";

describe("Simulado Redacao Service", () => {
  let simuladoRedacaoService: SimuladoRedacaoService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [SimuladoRedacaoService],
      imports: [DatabaseModule],
    }).compile();

    simuladoRedacaoService = moduleRef.get<SimuladoRedacaoService>(SimuladoRedacaoService);
  });

  describe("findAll", () => {
    it("teste generico", () => {
      expect(1).toBe(1);
    });
  });
});
