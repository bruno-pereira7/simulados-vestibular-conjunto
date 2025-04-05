import { Test } from "@nestjs/testing";
import { DatabaseModule } from "../../common/database/database.module";
import { ReferenciaService } from "./referencia.service";

describe("Referencia Service", () => {
  let referenciaService: ReferenciaService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [ReferenciaService],
      imports: [DatabaseModule],
    }).compile();

    referenciaService = moduleRef.get<ReferenciaService>(ReferenciaService);
  });

  describe("findAll", () => {
    it("teste generico", () => {
      expect(1).toBe(1);
    });
  });
});
