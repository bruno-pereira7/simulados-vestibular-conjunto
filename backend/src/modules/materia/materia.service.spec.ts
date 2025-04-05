import { Test } from "@nestjs/testing";
import { DatabaseModule } from "../../common/database/database.module";
import { MateriaService } from "./materia.service";

describe("Alternativa Service", () => {
  let alternativaService: MateriaService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [MateriaService],
      imports: [DatabaseModule],
    }).compile();

    alternativaService = moduleRef.get<MateriaService>(MateriaService);
  });

  describe("findAll", () => {
    it("teste generico", () => {
      expect(1).toBe(1);
    });
  });
});
