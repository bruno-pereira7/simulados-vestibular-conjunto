import { Test } from "@nestjs/testing";
import { DatabaseModule } from "../../common/database/database.module";
import { CursoMateriaService } from "./curso-materia.service";

describe("Curso Materia Service", () => {
  let cursoMateriaService: CursoMateriaService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [CursoMateriaService],
      imports: [DatabaseModule],
    }).compile();

    cursoMateriaService = moduleRef.get<CursoMateriaService>(CursoMateriaService);
  });

  describe("findAll", () => {
    it("teste generico", () => {
      expect(1).toBe(1);
    });
  });
});
