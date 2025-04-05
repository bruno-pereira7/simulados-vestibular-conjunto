import { Test } from "@nestjs/testing";
import { DatabaseModule } from "../../common/database/database.module";
import { QuestaoReferenciaController } from "./questao-referencia.controller";
import { QuestaoReferenciaService } from "./questao-referencia.service";

describe("Questao Referencia Controller", () => {
  let questaoReferenciaController: QuestaoReferenciaController;
  let questaoReferenciaService: QuestaoReferenciaService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [QuestaoReferenciaController],
      providers: [QuestaoReferenciaService, DatabaseModule],
    }).compile();

    questaoReferenciaService = moduleRef.get<QuestaoReferenciaService>(
      QuestaoReferenciaService,
    );
    questaoReferenciaController = moduleRef.get<QuestaoReferenciaController>(
      QuestaoReferenciaController,
    );
  });

  describe("findAll", () => {
    it("teste generico", () => {
      expect(1).toBe(1);
    });
  });
});
