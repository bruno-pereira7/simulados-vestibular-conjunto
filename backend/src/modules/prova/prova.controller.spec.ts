import { Test } from "@nestjs/testing";
import { DatabaseModule } from "../../common/database/database.module";
import { ProvaController } from "./prova.controller";
import { ProvaService } from "./prova.service";

describe("Prova Controller", () => {
  let provaController: ProvaController;
  let provaService: ProvaService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [ProvaController],
      providers: [ProvaService, DatabaseModule],
    }).compile();

    provaService = moduleRef.get<ProvaService>(ProvaService);
    provaController = moduleRef.get<ProvaController>(
      ProvaController,
    );
  });

  describe("findAll", () => {
    it("teste generico", () => {
      expect(1).toBe(1);
    });
  });
});
