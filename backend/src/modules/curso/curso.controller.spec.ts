import { Test } from "@nestjs/testing";
import { DatabaseModule } from "../../common/database/database.module";
import { CursoController } from "./curso.controller";
import { CursoService } from "./curso.service";

describe("Curso Controller", () => {
  let cursoController: CursoController;
  let cursoService: CursoService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [CursoController],
      providers: [CursoService, DatabaseModule],
    }).compile();

    cursoService =
      moduleRef.get<CursoService>(CursoService);
    cursoController = moduleRef.get<CursoController>(
      CursoController,
    );
  });

  describe("findAll", () => {
    it("teste generico", () => {
      expect(1).toBe(1);
    });
  });
});
