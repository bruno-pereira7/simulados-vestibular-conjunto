import { Test } from "@nestjs/testing";
import { DatabaseModule } from "../../common/database/database.module";
import { QuestaoReferenciaService } from "./questao-referencia.service";

describe("Questao Referencia Service", () => {
  let questaoReferenciaService: QuestaoReferenciaService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [QuestaoReferenciaService],
      imports: [DatabaseModule],
    }).compile();

    questaoReferenciaService = moduleRef.get<QuestaoReferenciaService>(QuestaoReferenciaService);
  });

  describe("findAll", () => {
    it("teste generico", () => {
      expect(1).toBe(1);
    });
  });
});
