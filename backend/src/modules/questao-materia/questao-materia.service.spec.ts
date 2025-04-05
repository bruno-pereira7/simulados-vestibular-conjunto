import { Test } from "@nestjs/testing";
import { DatabaseModule } from "../../common/database/database.module";
import { QuestaoMateriaService } from "./questao-materia.service";

describe("Questao Materia Service", () => {
  let questaoMateriaService: QuestaoMateriaService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [QuestaoMateriaService],
      imports: [DatabaseModule],
    }).compile();

    questaoMateriaService = moduleRef.get<QuestaoMateriaService>(QuestaoMateriaService);
  });

  describe("findAll", () => {
    it("teste generico", () => {
      expect(1).toBe(1);
    });
  });
});
