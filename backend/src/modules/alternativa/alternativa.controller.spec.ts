import { Test } from "@nestjs/testing";
import { DatabaseModule } from "../../common/database/database.module";
import { AlternativaController } from "./alternativa.controller";
import { AlternativaService } from "./alternativa.service";

describe("Alternativa Controller", () => {
  let alternativaController: AlternativaController;
  let alternativaService: AlternativaService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [AlternativaController],
      providers: [AlternativaService, DatabaseModule],
    }).compile();

    alternativaService = moduleRef.get<AlternativaService>(AlternativaService);
    alternativaController = moduleRef.get<AlternativaController>(
      AlternativaController,
    );
  });

  describe("findAll", () => {
    it("teste generico", () => {
      expect(1).toBe(1);
    });
  });
});
