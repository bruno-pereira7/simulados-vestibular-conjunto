import { Test } from "@nestjs/testing";
import { DatabaseModule } from "../../common/database/database.module";
import { ReferenciaController } from "./referencia.controller";
import { ReferenciaService } from "./referencia.service";

describe("Referencia Controller", () => {
  let referenciaController: ReferenciaController;
  let referenciaService: ReferenciaService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [ReferenciaController],
      providers: [ReferenciaService, DatabaseModule],
    }).compile();

    referenciaService = moduleRef.get<ReferenciaService>(ReferenciaService);
    referenciaController =
      moduleRef.get<ReferenciaController>(ReferenciaController);
  });

  describe("findAll", () => {
    it("teste generico", () => {
      expect(1).toBe(1);
    });
  });
});
