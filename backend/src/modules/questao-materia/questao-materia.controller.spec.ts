import { Test } from "@nestjs/testing";
import { DatabaseModule } from "../../common/database/database.module";
import { QuestaoMateriaController } from "./questao-materia.controller";
import { QuestaoMateriaService } from "./questao-materia.service";

describe("Questao Materia Controller", () => {
  let questaoMateriaController: QuestaoMateriaController;
  let questaoMateriaService: QuestaoMateriaService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [QuestaoMateriaController],
      providers: [QuestaoMateriaService, DatabaseModule],
    }).compile();

    questaoMateriaService = moduleRef.get<QuestaoMateriaService>(QuestaoMateriaService);
    questaoMateriaController = moduleRef.get<QuestaoMateriaController>(
      QuestaoMateriaController,
    );
  });

  describe("findAll", () => {
    it("teste generico", () => {
      expect(1).toBe(1);
    });
  });
});
