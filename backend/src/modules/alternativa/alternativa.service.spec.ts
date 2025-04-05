import { Test } from "@nestjs/testing";
import { DatabaseModule } from "../../common/database/database.module";
import { AlternativaService } from "./alternativa.service";

describe("Alternativa Service", () => {
  let alternativaService: AlternativaService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [AlternativaService],
      imports: [DatabaseModule],
    }).compile();

    alternativaService = moduleRef.get<AlternativaService>(AlternativaService);
  });

  describe("findAll", () => {
    it("teste generico", () => {
      expect(1).toBe(1);
    });
  });
});
