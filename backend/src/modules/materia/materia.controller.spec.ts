import { Test } from "@nestjs/testing";
import { DatabaseModule } from "../../common/database/database.module";
import { MateriaController } from "./materia.controller";
import { MateriaService } from "./materia.service";

describe("Materia Controller", () => {
  let materiaController: MateriaController;
  let materiaService: MateriaService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [MateriaController],
      providers: [MateriaService, DatabaseModule],
    }).compile();

    materiaService = moduleRef.get<MateriaService>(MateriaService);
    materiaController = moduleRef.get<MateriaController>(
      MateriaController,
    );
  });

  describe("findAll", () => {
    it("teste generico", () => {
      expect(1).toBe(1);
    });
  });
});
