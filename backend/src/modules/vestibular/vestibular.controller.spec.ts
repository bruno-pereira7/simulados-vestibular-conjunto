import { Test } from "@nestjs/testing";
import { DatabaseModule } from "../../common/database/database.module";
import { VestibularController } from "./vestibular.controller";
import { VestibularService } from "./vestibular.service";

describe("Vestibular Controller", () => {
  let vestibularController: VestibularController;
  let vestibularService: VestibularService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [VestibularController],
      providers: [VestibularService, DatabaseModule],
    }).compile();

    vestibularService = moduleRef.get<VestibularService>(VestibularService);
    vestibularController = moduleRef.get<VestibularController>(
      VestibularController,
    );
  });

  describe("findAll", () => {
    it("teste generico", () => {
      expect(1).toBe(1);
    });
  });
});
