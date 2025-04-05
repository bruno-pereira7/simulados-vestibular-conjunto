import { Test } from "@nestjs/testing";
import { DatabaseModule } from "../../common/database/database.module";
import { SimuladoController } from "./simulado.controller";
import { SimuladoService } from "./simulado.service";

describe("Simulado Controller", () => {
  let simuladoController: SimuladoController;
  let simuladoService: SimuladoService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [SimuladoController],
      providers: [SimuladoService, DatabaseModule],
    }).compile();

    simuladoService = moduleRef.get<SimuladoService>(SimuladoService);
    simuladoController = moduleRef.get<SimuladoController>(
      SimuladoController,
    );
  });

  describe("findAll", () => {
    it("teste generico", () => {
      expect(1).toBe(1);
    });
  });
});
