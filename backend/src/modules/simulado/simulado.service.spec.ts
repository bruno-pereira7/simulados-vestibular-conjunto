import { Test } from "@nestjs/testing";
import { DatabaseModule } from "../../common/database/database.module";
import { SimuladoService } from "./simulado.service";

describe("Simulado Service", () => {
  let simuladoService: SimuladoService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [SimuladoService],
      imports: [DatabaseModule],
    }).compile();

    simuladoService = moduleRef.get<SimuladoService>(SimuladoService);
  });

  describe("findAll", () => {
    it("teste generico", () => {
      expect(1).toBe(1);
    });
  });
});
