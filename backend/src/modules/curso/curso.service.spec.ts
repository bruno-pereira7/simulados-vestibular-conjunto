import { Test } from "@nestjs/testing";
import { DatabaseModule } from "../../common/database/database.module";
import { CursoService } from "./curso.service";

describe("Curso Service", () => {
  let cursoService: CursoService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [CursoService],
      imports: [DatabaseModule],
    }).compile();

    cursoService = moduleRef.get<CursoService>(CursoService);
  });

  describe("findAll", () => {
    it("teste generico", () => {
      expect(1).toBe(1);
    });
  });
});
