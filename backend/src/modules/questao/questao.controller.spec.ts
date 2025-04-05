import { Test } from "@nestjs/testing";
import { DatabaseModule } from "../../common/database/database.module";
import { QuestaoController } from "./questao.controller";
import { QuestaoService } from "./questao.service";

describe("Questao Controller", () => {
  let questaoController: QuestaoController;
  let questaoService: QuestaoService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [QuestaoController],
      providers: [QuestaoService, DatabaseModule],
    }).compile();

    questaoService = moduleRef.get<QuestaoService>(QuestaoService);
    questaoController = moduleRef.get<QuestaoController>(
      QuestaoController,
    );
  });

  describe("findAll", () => {
    it("teste generico", () => {
      expect(1).toBe(1);
    });
  });
});
