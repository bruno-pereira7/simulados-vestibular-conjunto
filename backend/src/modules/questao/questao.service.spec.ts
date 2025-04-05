import { Test } from "@nestjs/testing";
import { DatabaseModule } from "../../common/database/database.module";
import { QuestaoService } from "./questao.service";

describe("Questao Service", () => {
  let questaoService: QuestaoService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [QuestaoService],
      imports: [DatabaseModule],
    }).compile();

    questaoService = moduleRef.get<QuestaoService>(QuestaoService);
  });

  describe("findAll", () => {
    it("teste generico", () => {
      expect(1).toBe(1);
    });
  });
});
