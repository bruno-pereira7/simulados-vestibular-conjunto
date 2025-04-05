import { Test } from "@nestjs/testing";
import { DatabaseModule } from "../../common/database/database.module";
import { CursoMateriaController } from "./curso-materia.controller";
import { CursoMateriaService } from "./curso-materia.service";

describe("Curso Materia Controller", () => {
  let cursoMateriaController: CursoMateriaController;
  let cursoMateriaService: CursoMateriaService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [CursoMateriaController],
      providers: [CursoMateriaService, DatabaseModule],
    }).compile();

    cursoMateriaService =
      moduleRef.get<CursoMateriaService>(CursoMateriaService);
    cursoMateriaController = moduleRef.get<CursoMateriaController>(
      CursoMateriaController,
    );
  });

  describe("findAll", () => {
    it("teste generico", () => {
      expect(1).toBe(1);
    });
  });
});
