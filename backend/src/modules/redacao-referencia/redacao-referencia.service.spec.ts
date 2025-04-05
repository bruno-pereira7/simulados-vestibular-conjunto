import { Test } from "@nestjs/testing";
import { DatabaseModule } from "../../common/database/database.module";
import { RedacaoReferenciaService } from "./redacao-referencia.service";

describe("Alternativa Service", () => {
  let redacaoReferenciaService: RedacaoReferenciaService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [RedacaoReferenciaService],
      imports: [DatabaseModule],
    }).compile();

    redacaoReferenciaService = moduleRef.get<RedacaoReferenciaService>(
      RedacaoReferenciaService,
    );
  });

  describe("findAll", () => {
    it("teste generico", () => {
      expect(1).toBe(1);
    });
  });
});
