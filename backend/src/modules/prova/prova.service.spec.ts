import { Test } from "@nestjs/testing";
import { DatabaseModule } from "../../common/database/database.module";
import { ProvaService } from "./prova.service";

describe("Prova Service", () => {
  let provaService: ProvaService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [ProvaService],
      imports: [DatabaseModule],
    }).compile();

    provaService = moduleRef.get<ProvaService>(ProvaService);
  });

  describe("findAll", () => {
    it("teste generico", () => {
      expect(1).toBe(1);
    });
  });
});
